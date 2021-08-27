import React from 'react'
import Image from 'next/image'
import { Button, Form } from 'react-bootstrap';

import avatar from '../../public/images/Avatar.png'

import styles from './Account.module.scss'

const Account = () => {

    const handleSubmit = () => {
        console.log('handle submit')
    }

    const setName = (name: string) => {
        console.log(name)
    }

    const setEmail = (email: string) => {
        console.log(email)
    }

    const setPassword = (password: string) => {
        console.log(password)
    }

    const setConfirmPassword = (confirmPassword: string) => {
        console.log(confirmPassword)
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
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label className={styles.formLabel}>Email</Form.Label>
                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className={styles.formLabel}>Password</Form.Label>
                    <Form.Control type="text" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label className={styles.formLabel}>Confirm Password</Form.Label>
                    <Form.Control type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className={styles.submitButton}>
                    Save & Next
                </Button>
            </Form>

        </>
    )
}

export default Account
