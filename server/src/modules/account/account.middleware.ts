import { Request, Response } from 'express'
import Account from '../account/account.model'

import * as AccountService from './../account/account.service'

export const validateDuplicateEmail = async (req: Request, res: Response, next: any) => {
    const account: Account | null = await AccountService.findByEmail(req.body.email)
    if (account != null) {
        res.status(400).send({ message: `Account already exists for email ${req.body.email}` })
        return
    } else {
        next()
    }
}

