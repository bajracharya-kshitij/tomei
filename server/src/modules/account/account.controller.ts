import { Request, Response } from "express"
import { compare } from 'bcryptjs'

import Account from '../account/account.model'

import * as AccountService from './../account/account.service'

export const login = async (req: Request, res: Response) => {
    try {
        const account: Account = await AccountService.findAccountOrThrowError(req.body.email)
        if (await compare(req.body.password, account.password)) {
            const accessToken = await AccountService.generateAccessToken(account.email);

            res.json({
                accessToken: accessToken,
                name: account.name
            })

        } else {
            res.status(401).send({
                message: 'Invalid username or password'
            })
        }
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        await AccountService.create(req.body)
        res.status(201).send('Account created successfully!')
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}


