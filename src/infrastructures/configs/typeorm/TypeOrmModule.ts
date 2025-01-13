import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config()

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/infrastructures/database/entities/**/*.ts"],
  migrations: ["src/infrastructures/database/migrations/**/*.ts"],
  subscribers: ["src/infrastructures/database/subscribers/**/*.ts"],
});

export default appDataSource;
