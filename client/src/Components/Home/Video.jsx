import React from "react";
import styles from './styles/Video.module.css';

export default function Video(){
    return (

            <div className={styles.content}>
<div className={styles.column}>
<div className={styles.text}>We are trying to bridge the gap of information and guidance between and your potential and opportunities. We provide narrowed road maps and detailed career paths, personalized guidance from alumni and mentors, and a supportive community to help you succeed.</div>
<div className={styles.actions}>
<div className={styles.form}>
<div className={styles.textInput}>
<div className={styles.enterYourEmail}>Enter your email</div>
</div>
<div className={styles.button}>
<div className={styles.signUp}>Sign up</div>
</div>
</div>
<div className={styles.text1}>{`By clicking Sign Up you're confirming that you agree with our `}
<span className={styles.termsAndConditions}>Terms and Conditions</span>.
</div>
</div>
</div>
<div className={styles.column1}>
<b className={styles.heading}>Unlock Your Potential with Personalized Career Guidance</b>
</div>
</div>

    )
}