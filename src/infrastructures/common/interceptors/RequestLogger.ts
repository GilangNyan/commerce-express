import { NextFunction, Request, Response } from "express";
import { LoggerService } from "../logger/LoggerService";

export class RequestLogger {
  private static instance: RequestLogger;

  constructor(private readonly logger: LoggerService) {}

  static getInstance(): RequestLogger {
    if (!this.instance) {
      const logging = new LoggerService()
      this.instance = new RequestLogger(logging);
    }
    return this.instance;
  }

  handle(req: Request, res: Response, next: NextFunction): void {
    const start = Date.now();
    const clientIp = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    
    this.logger.info(`Incoming request: ${req.method} ${req.originalUrl} from IP: ${clientIp}`);

    res.on('finish', () => {
      const duration = Date.now() - start;
      const status = res.statusCode;

      this.logger.info(`Request completed: ${req.method} ${req.originalUrl} [${status}] from IP: ${clientIp} - ${duration}ms`);
    })

    next();
  }
}