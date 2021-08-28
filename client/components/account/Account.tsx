import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

import { valueExists } from '../../utils/parser'

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
    const [image, setImage] = useState<string>("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [fileType, setFileType] = useState("");

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
        setImage('')
        setIsUploaded(false)
        setFileType('')
    }

    const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setFileType(e.target.files[0].type);
            let reader = new FileReader();

            reader.onload = function (e) {
                //@ts-ignore
                setImage(e.target.result);
                setIsUploaded(true);
            };

            reader.readAsDataURL(e.target.files[0]);
            console.log(image)
        }
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
            <div className={styles.formWrap}>
                <div className={styles.text}>Because there will be documents that you need to prepare to apply for the loan, let's start off by creating a password so that you can login to your account once you have these document ready.</div>

                <Form className={styles.form} onSubmit={handleSubmit}>
                    <Row>
                        <Col md={2}>
                            <div className={styles.textCenter}>
                                <div className={styles.imageUpload}>
                                    {!isUploaded ? (
                                        <>
                                            <label htmlFor="upload-input">
                                                <img src='images/Avatar.png' alt="avatar" />
                                                <p className={styles.upload}>Upload</p>
                                            </label>

                                            <input
                                                id="upload-input"
                                                type="file"
                                                accept=".jpg,.jpeg,.gif,.png"
                                                onChange={handleImageChange}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <label htmlFor="upload-change-input">
                                                <img
                                                    className={styles.image}
                                                    src={image}
                                                    draggable={false}
                                                    alt="uploaded-img"
                                                />
                                                <p className={styles.upload}>Change</p>
                                            </label>

                                            <input
                                                id="upload-change-input"
                                                type="file"
                                                accept=".jpg,.jpeg,.gif,.png"
                                                onChange={handleImageChange}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <Form.Group controlId="formName">
                                <Form.Label className={styles.formLabel}>Name</Form.Label>
                                <Form.Control className={styles.formControl} type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label className={styles.formLabel}>Password</Form.Label>
                                <Form.Control className={styles.formControl} type="password" onChange={(e) => checkPassword(e.target.value)} value={password} />
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group controlId="formEmail">
                                <Form.Label className={styles.formLabel}>Email</Form.Label>
                                <Form.Control className={styles.formControl} type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </Form.Group>
                            <Form.Group className={styles.formGroup} controlId="formConfirmPassword">
                                <Form.Label className={styles.formLabel}>Confirm Password</Form.Label>
                                <Form.Control className={styles.formControl} type="password" onChange={(e) => checkConfirmPassword(e.target.value)} value={confirmPassword} />
                                {passwordMismatch && <div className={styles.errorMessage}>Password doesn't match</div>}
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className={styles.textRight}>
                        <Button variant="primary" type="submit" className={styles.submitButton}>
                            Save & Next <img className={styles.arrow} src='images/arrow-right.png' alt="arrow" />
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Account
