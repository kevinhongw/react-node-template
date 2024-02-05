import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response) => {
  console.log('Health check route hit');
  res.send({ status: 'ok' });
};
