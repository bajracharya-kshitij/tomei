import React, { Fragment } from 'react'
import Image from 'next/image'

import Step from '../step'

import stepOne from '../../public/images/Wizard-Step1.png'
import stepTwo from '../../public/images/Wizard-Step2.png'
import stepThree from '../../public/images/Wizard-Step3.png'
import stepFour from '../../public/images/Wizard-Step4.png'
import stepFive from '../../public/images/Wizard-Step5.png'
import horizontalBar from '../../public/images/Wizard-HorizontalBar.png'

import styles from './Steps.module.scss'

const Steps = () => {

    const steps = [
        { image: stepOne, header: 'Step 1', text: 'Create your account password', appendHorizontalBar: true },
        { image: stepTwo, header: 'Step 2', text: 'Personal Information', appendHorizontalBar: true },
        { image: stepThree, header: 'Step 3', text: 'Employment Details', appendHorizontalBar: true },
        { image: stepFour, header: 'Step 4', text: 'Upload Documents', appendHorizontalBar: true },
        { image: stepFive, header: 'Step 5', text: 'Complete', appendHorizontalBar: false }
    ]

    return (
        <>
            {steps.map((step, index) => {
                return <div key={index} className={styles.steps}>
                    <Step image={step.image} header={step.header} text={step.text} />
                    {step.appendHorizontalBar && <Image src={horizontalBar} alt="Horizontal Bar" />}
                </div>
            })}
        </>
    )
}

export default Steps
