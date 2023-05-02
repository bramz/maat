import {Request, Response } from 'express'
import { PostgresDataSource } from '../utils/postgres-data-source'
import { User } from "../models/typeorm/user"


export class UserControl {
    static register = async (req: Request, res: Response) => {
        let { email, password1, password2 } = req.body

        if(!email && password1 && password2) {
            res.status(401).send()
        }

        if(password1 != password2) {
            res.status(401).send()
        }

        const u = PostgresDataSource.getRepository(User).create(req.body)
        const results = PostgresDataSource.getRepository(User).save(u)
        return res.send(results)
    }
}