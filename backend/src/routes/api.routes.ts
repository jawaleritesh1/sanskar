import { Router, Request, Response } from 'express';
import { handleContactSubmit } from '../controllers/contact.controller';
import { handleConsultationSubmit } from '../controllers/consultation.controller';
import { handleDiagnosticSubmit } from '../controllers/diagnostic.controller';
import { handleNewsletterSubscribe } from '../controllers/newsletter.controller';
import { handleCareerSubmit } from '../controllers/career.controller';
import { storage } from '../services/storage.service';

const router = Router();

// Health Check
router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Sanskar Growth Solutions API'
  });
});

// Form Submissions
router.post('/contact', handleContactSubmit);
router.post('/consultation', handleConsultationSubmit);
router.post('/diagnostic', handleDiagnosticSubmit);
router.post('/newsletter', handleNewsletterSubscribe);
router.post('/career', handleCareerSubmit);

// Admin Submissions List (For inspection / dashboard)
router.get('/submissions', async (_req: Request, res: Response) => {
  const submissions = await storage.getAllSubmissions();
  res.status(200).json({
    success: true,
    data: submissions
  });
});

export default router;
