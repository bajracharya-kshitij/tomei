import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Image from 'next/image'

import { valueExists } from '../../utils/parser'

import avatar from '../../public/images/Avatar.png'

import styles from './Account.module.scss'

type AccountProps = {
    name: string,
    email: string,
    password: string
}

const Account = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false)

    const checkPassword = (value: string) => {
        setPassword(value)
        setPasswordMismatch(!valueExists(value) || !valueExists(confirmPassword) || confirmPassword !== value)
    }

    const checkConfirmPassword = (value: string) => {
        setConfirmPassword(value)
        setPasswordMismatch(!valueExists(password) || !valueExists(value) || password !== value)
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setPasswordMismatch(false)
    }

    const handleSubmit = (e: any) => {
        const accountDetails: AccountProps = {
            name: name,
            email: email,
            password: password
        }

        axios.post(`/api/account/register`, accountDetails)
            .then((response) => {
                resetForm()
            })
            .catch((error) => console.error(error))

        e.preventDefault();
    }

    return (
        <>
            <div className={styles.accountHeader}>Create Your Account</div>
            <div className={styles.text}>Because there will be documents that you need to prepare to apply for the loan, let's start off by creating a password so that you can login to your account once you have these document ready.</div>

            <Image src={avatar} alt="Avatar" />
            <div className={styles.upload}>Upload</div>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label className={styles.formLabel}>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label className={styles.formLabel}>Email</Form.Label>
                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className={styles.formLabel}>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => checkPassword(e.target.value)} value={password} />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label className={styles.formLabel}>Confirm Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => checkConfirmPassword(e.target.value)} value={confirmPassword} />
                    {passwordMismatch && <div>Password doesn't match</div>}
                </Form.Group>
                <Button variant="primary" type="submit" className={styles.submitButton}>
                    Save & Next
                </Button>
            </Form>

        </>
    )
}

export default Account
