import {Request, Response } from 'express'
import { PostgresDataSource } from '../utils/postgres-data-source'
import { User } from "../models/typeorm/user"


export class UserControl {
    static register = async (req: Request, res: Response) => {
        let { email, password1, password2, perms } = req.body

        if(!email && password1 && password2) {
            res.status(401).send()
        }

        if(password1 != password2) {
            res.status(401).send()
        }

        const user = new User()
        user.email = email
        user.password = user.encryptPassword(password1)
        user.perms = perms

        const results = await PostgresDataSource.getRepository(User).save(user)
        return res.send(results)
    }
}