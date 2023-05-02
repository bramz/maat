import { DataSource } from "typeorm";
import { User } from '../models/typeorm/user'

export const PostgresDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: '',
    password: '',
    database: '',
    entities: [
        User
    ],
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
})
