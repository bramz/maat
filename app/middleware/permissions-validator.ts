import { Request, Response, NextFunction } from 'express'
import { MysqlDataSource } from '../source'

import { user } from '../models/typeorm/user'

export const validatePermissions = (perms: Array<string>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const id = res.locals.payload.userId

        const userRepository = MysqlDataSource.getRepository(user)

        let u: user

        try {
            u = await userRepository.findOneOrFail(id)
        } catch (id) {
            res.status(401).send()
        }
    }
}