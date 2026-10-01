import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { config } from './config/env';
import apiRouter from './routes/api.routes';

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      config.frontendUrl,
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:4173',
      'http://200.234.34.29',
      'https://sanskargrowthsolutions.com',
      'https://www.sanskargrowthsolutions.com'
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger (Development)
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api', apiRouter);

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'API Route not found'
  });
});

// Global Error Handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start Server
app.listen(config.port, () => {
  console.log(`=============================================`);
  console.log(`🚀 SGS Backend API running on port ${config.port}`);
  console.log(`🌍 Environment: ${config.nodeEnv}`);
  console.log(`🔗 API Base URL: http://localhost:${config.port}/api`);
  console.log(`=============================================`);
});

export default app;
