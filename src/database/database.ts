import { Sequelize } from 'sequelize';
require("dotenv").config();

export const database = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
    }
);