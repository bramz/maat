import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { PostgresDataSource } from '../utils/postgres-data-source'
import { User } from '../models/typeorm/user'

export class ProfileControl {
    static index = async (req: Request, res: Response) => {
        let id = req.params.id
        const userRepository = PostgresDataSource.getRepository(User)
        let u: User

        try {
            u = await userRepository.findOneOrFail({where: { id }})
            res.status(200).send({
                userId: u.id,
                email: u.email,
                perms: u.perms,
                firstName: u.firstName,
                middleName: u.middleName,
                lastName: u.lastName,
                address: u.address,
                phone: u.phone
            })
        } catch (error) {
            res.status(401).send()
        }
    }
}
