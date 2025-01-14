import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";
import { DIContainer } from "./di/DIContainer";
import { routes } from "./interfaces/routes";
import appDataSource from "./infrastructures/configs/typeorm/TypeOrmModule";
import { RequestLogger } from "./infrastructures/common/interceptors/RequestLogger";
import { LoggerService } from "./infrastructures/common/logger/LoggerService";

dotenv.config()

async function bootstrap() {
  const app = express();

  app.use(express.json());

  const PORT = process.env.PORT ?? 3000;

  // Init Dependency Injection Registrations
  DIContainer.init();

  // Init Database Connection
  await appDataSource.initialize()

  // Request Logger
  const logging = new LoggerService()
  const requestLogger = new RequestLogger(logging)
  app.use(requestLogger.handle.bind(requestLogger))

  // Register Routes
  app.use("/api/", routes);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

bootstrap();
