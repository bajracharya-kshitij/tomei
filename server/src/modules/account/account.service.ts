import { sign } from 'jsonwebtoken';

import Account from './account.model';

const ACCESS_TOKEN_VALIDITY_SECONDS = 86400

export const create = async (newAccount: Account): Promise<Account> => {
    const account = await findByEmail(newAccount.email)
    if (account) {
        throw new Error(`Account already exists for ${newAccount.email}`)
    }
    return await Account.create({ ...newAccount })
}

export const findByEmail = async (email: string): Promise<Account | null> => {
    return await Account.findOne({ where: { email: email } });
}

export const findAccountOrThrowError = async (email: string): Promise<Account> => {
    const account: Account | null = await findByEmail(email)
    if (account == null) {
        throw new Error(`No matching account found for ${email}`)
    }
    return account
}

export const generateAccessToken = (email: string): string => {
    return sign({ email }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: ACCESS_TOKEN_VALIDITY_SECONDS });
}