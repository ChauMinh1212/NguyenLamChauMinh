import { DataSource } from "typeorm"
import { ResourceEntity } from "../entities/resource.entity"


export const myDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [ResourceEntity],
    // logging: true,
    // synchronize: true,
})