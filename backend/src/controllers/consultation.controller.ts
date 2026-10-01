import { Request, Response } from 'express';
import { ConsultationSchema } from '../types';
import { storage } from '../services/storage.service';
import { emailService } from '../services/email.service';

export const handleConsultationSubmit = async (req: Request, res: Response): Promise<void> => {
  try {
    const parseResult = ConsultationSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        message: 'Invalid consultation request data',
        errors: parseResult.error.flatten().fieldErrors
      });
      return;
    }

    const data = parseResult.data;
    const record = await storage.saveConsultation(data);

    // Format notification email
    const emailHtml = `
      <h2>🚀 New Project Consultation Request</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Work Email:</strong> ${data.workEmail}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
      <p><strong>Service Focus:</strong> ${data.selectedRequirement || 'N/A'}</p>
      <p><strong>Budget Range:</strong> ${data.budgetRange || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${data.timeline || 'N/A'}</p>
      <p><strong>Project Objectives / Message:</strong></p>
      <blockquote style="background: #f4f7fa; padding: 12px; border-left: 4px solid #092B78;">
        ${data.message || 'No additional notes provided.'}
      </blockquote>
      <p><small>Submission ID: ${record.id} | Timestamp: ${record.createdAt}</small></p>
    `;

    await emailService.sendNotification(`New Project Consultation: ${data.company} (${data.fullName})`, emailHtml);

    res.status(201).json({
      success: true,
      message: 'Consultation request received successfully.',
      id: record.id
    });
  } catch (error) {
    console.error('Error handling consultation submission:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your request.'
    });
  }
};
