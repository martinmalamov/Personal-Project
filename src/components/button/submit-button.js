import React from 'react'
import styles from './submit-button.module.scss'

const SubmitButton = ({title  , onClick}) => {
    return(
    <button type="submit" className={styles.submit}
    onClick={onClick}>{title}</button>
    )
}

export default SubmitButton