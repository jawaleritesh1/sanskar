import { Request, Response } from 'express';
import { DiagnosticSchema } from '../types';
import { storage } from '../services/storage.service';
import { emailService } from '../services/email.service';

export const handleDiagnosticSubmit = async (req: Request, res: Response): Promise<void> => {
  try {
    const parseResult = DiagnosticSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        message: 'Invalid diagnostic assessment data',
        errors: parseResult.error.flatten().fieldErrors
      });
      return;
    }

    const data = parseResult.data;
    const record = await storage.saveDiagnostic(data);

    // Format notification email
    const emailHtml = `
      <h2>⚡ Growth Diagnostic Assessment Completed</h2>
      <p><strong>Business Profile:</strong> ${data.businessType}</p>
      <p><strong>Primary Growth Bottleneck:</strong> ${data.primaryBottleneck}</p>
      <p><strong>Revenue Stage:</strong> ${data.currentRevenueStage}</p>
      <hr />
      <h3>Calculated Recommendation:</h3>
      <p><strong>Target Stage:</strong> ${data.recommendedStage.toUpperCase()}</p>
      <p><strong>Focus Area:</strong> ${data.recommendedTitle}</p>
      <p><strong>Recommended Solution:</strong> ${data.recommendedSolution}</p>
      ${
        data.contactInfo
          ? `
        <hr />
        <h3>Lead Contact:</h3>
        <p><strong>Name:</strong> ${data.contactInfo.fullName || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.contactInfo.company || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.contactInfo.workEmail || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.contactInfo.phone || 'N/A'}</p>
      `
          : ''
      }
      <p><small>Diagnostic ID: ${record.id} | Timestamp: ${record.createdAt}</small></p>
    `;

    await emailService.sendNotification(`Growth Diagnostic Completed (${data.recommendedStage.toUpperCase()})`, emailHtml);

    res.status(201).json({
      success: true,
      message: 'Diagnostic result recorded successfully.',
      id: record.id
    });
  } catch (error) {
    console.error('Error handling diagnostic submission:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your request.'
    });
  }
};
