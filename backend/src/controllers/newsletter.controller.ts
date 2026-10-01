import { Request, Response } from 'express';
import { NewsletterSchema } from '../types';
import { storage } from '../services/storage.service';
import { emailService } from '../services/email.service';

export const handleNewsletterSubscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    const parseResult = NewsletterSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        success: false,
        message: 'Invalid email address provided',
        errors: parseResult.error.flatten().fieldErrors
      });
      return;
    }

    const data = parseResult.data;
    const record = await storage.saveNewsletter(data);

    // Send notification
    const emailHtml = `
      <h2>📰 New Newsletter Subscriber</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><small>Subscriber ID: ${record.id} | Timestamp: ${record.createdAt}</small></p>
    `;

    await emailService.sendNotification(`New Newsletter Subscriber: ${data.email}`, emailHtml);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to insights.',
      id: record.id
    });
  } catch (error) {
    console.error('Error handling newsletter subscription:', error);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your request.'
    });
  }
};
