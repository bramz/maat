import {Request, Response } from 'express'
import { MysqlDataSource } from '../source'
import { user } from "../models/typeorm/user"

export class UserControl {
    static register = async (req: Request, res: Response) => {
        let { email, password1, password2 } = req.body

        if(!email && password1 && password2) {
            res.status(401).send()
        }

        if(password1 != password2) {
            res.status(401).send()
        }

        const u = MysqlDataSource.getRepository(user).create(req.body)
        const results = MysqlDataSource.getRepository(user).save(u)
        return res.send(results)
    }
}