import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "impetuskeydb",
    synchronize: true,
    logging: false,
    entities: [Usuario],
    migrations: [],
    subscribers: [],
})
