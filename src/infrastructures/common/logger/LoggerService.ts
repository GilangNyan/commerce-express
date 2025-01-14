import winston from "winston";
import { ILogger } from "../../../domains/logger/LoggerInterface";

export class LoggerService implements ILogger {
  private logger

  constructor() {
    this.logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`
        })
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log', level: 'warn' })
      ]
    })
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }

  verbose(message: string): void {
    this.logger.verbose(message);
  }
}