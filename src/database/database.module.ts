import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import { join } from "path";

import { InfrastructureModule } from "./infrastructure/infrastructure.module";

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        database: process.env.WRITE_DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        entities: [
          join(__dirname, "../", "/**/core/entities/**.entity{.ts,.js}"),
        ],
        migrations: [
          join(__dirname, "../", "/database/migrations/**{.ts,.js}"),
        ],
        logging: process.env.TYPEORM_LOGGING === "true",
        synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
        migrationsRun: process.env.TYPEORM_MIGRATION_RUN === "true",
        migrationsTableName: "migrations",
        cli: {
          migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
        },
      }),
    }),
    InfrastructureModule,
  ],
})
export class DatabaseModule {}
