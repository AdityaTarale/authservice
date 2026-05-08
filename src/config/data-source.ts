import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User.js";
import { Config } from "./index.js";

if (
    !Config.DB_HOST ||
    !Config.DB_PORT ||
    !Config.DB_USERNAME ||
    !Config.DB_PASSWORD ||
    !Config.DB_NAME
) {
    throw new Error("Database configuration is missing. Check your .env file.");
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: Config.DB_HOST,
    port: Number(Config.DB_PORT),
    username: Config.DB_USERNAME,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    synchronize: Config.NODE_ENV === "dev" || Config.NODE_ENV === "test",
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
