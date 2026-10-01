import nodemailer from 'nodemailer';
import { config } from '../config/env';

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor() {
    if (config.smtp.host && config.smtp.user && config.smtp.pass) {
      this.transporter = nodemailer.createTransport({
        host: config.smtp.host,
        port: config.smtp.port,
        secure: config.smtp.secure,
        auth: {
          user: config.smtp.user,
          pass: config.smtp.pass
        }
      });
    }
  }

  public async sendNotification(subject: string, htmlContent: string): Promise<boolean> {
    try {
      if (this.transporter) {
        await this.transporter.sendMail({
          from: config.smtp.from,
          to: config.notificationEmail,
          subject: `[SGS Portal] ${subject}`,
          html: htmlContent
        });
        console.log(`[EmailService] Notification sent successfully: "${subject}"`);
        return true;
      } else {
        console.log(`[EmailService - MOCK MODE] (Configure SMTP in .env for live emails)`);
        console.log(`To: ${config.notificationEmail}`);
        console.log(`Subject: [SGS Portal] ${subject}`);
        return true;
      }
    } catch (error) {
      console.error('[EmailService] Failed to send email:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();
