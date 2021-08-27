import React from 'react'

import Steps from '../steps'
import Account from '../account'

import styles from './Content.module.scss';

const Content = () => {
    return (
        <div className={styles.containerWrap}>
            <img className={styles.logo} src='images/Logo.png' alt="Tomei Logo" />
            <Steps />
            <Account />
        </div>
    )
}

export default Content
