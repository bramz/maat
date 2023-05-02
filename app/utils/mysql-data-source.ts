import { DataSource } from "typeorm";
import { User } from '../models/typeorm/user'

export const MysqlDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
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
