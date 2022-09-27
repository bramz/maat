import { DataSource } from "typeorm";
import { user } from '../models/typeorm/user'

export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: '',
    password: '',
    database: '',
    entities: [
        user
    ],
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
})
