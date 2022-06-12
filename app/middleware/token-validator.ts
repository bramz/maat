import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from '../config'

export const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"]
    let payload;

    try {
        payload = <any>jwt.verify(token, config.key)
        res.locals.payload = payload;
    } catch (error) {
        res.status(401).send()
        return
    }

    const { userId, email } = payload;
    const newToken = jwt.sign({ userId, email }, config.key, {
        expiresIn: "1h"
    })
    res.setHeader("token", newToken)
    next()
}