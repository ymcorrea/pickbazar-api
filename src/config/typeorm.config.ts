import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pass123",
  database: "postgres",
  autoLoadEntities: true,
  synchronize: true,
};
