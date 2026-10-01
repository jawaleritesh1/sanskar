import { Request, Response } from 'express';
import { CareerApplicationSchema } from '../types';
import { storage } from '../services/storage.service';
import { emailService } from '../services/email.service';

export const handleCareerSubmit = async (req: Request, res: Response): Promise<void> => {
  try {
    const parseResult = CareerApplicationSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        message: 'Invalid career application data',
        errors: parseResult.error.flatten().fieldErrors
      });
      return;
    }

    const data = parseResult.data;
    const record = await storage.saveCareerApplication(data);

    // Format notification email
    const emailHtml = `
      <h2>💼 New Job Application Received</h2>
      <p><strong>Applied Role:</strong> ${data.jobTitle} (ID: ${data.jobId})</p>
      <p><strong>Candidate Name:</strong> ${data.applicantName}</p>
      <p><strong>Email:</strong> ${data.applicantEmail}</p>
      <p><strong>Phone / WhatsApp:</strong> ${data.applicantPhone || 'N/A'}</p>
      <p><strong>Portfolio / LinkedIn:</strong> ${
        data.portfolioLink
          ? `<a href="${data.portfolioLink}" target="_blank">${data.portfolioLink}</a>`
          : 'N/A'
      }</p>
      <p><strong>Cover Note / Recent Work:</strong></p>
      <blockquote style="background: #f4f7fa; padding: 12px; border-left: 4px solid #FF4B16;">
        ${data.applicantNote || 'No cover note provided.'}
      </blockquote>
      <p><small>Application ID: ${record.id} | Timestamp: ${record.createdAt}</small></p>
    `;

    await emailService.sendNotification(
      `Job Application: ${data.applicantName} for ${data.jobTitle}`,
      emailHtml
    );

    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully.',
      id: record.id
    });
  } catch (error) {
    console.error('Error handling career application:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your application.'
    });
  }
};
