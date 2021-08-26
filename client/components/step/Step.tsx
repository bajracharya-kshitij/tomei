import React from 'react'
import Image from 'next/image'

import styles from './Step.module.scss'

type StepProps = {
    image: any,
    header: string,
    text: string
}

const Step = (props: StepProps) => {
    return (
        <>
            <Image src={props.image} alt={props.header} />
            <div className={styles.description}>
                <div className={styles.header}>{props.header}:</div>
                <div className={styles.text}>{props.text}</div>
            </div>
        </>
    )
}

export default Step
