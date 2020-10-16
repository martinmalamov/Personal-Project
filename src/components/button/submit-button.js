import React from 'react'
import styles from './submit-button.module.scss'

const SubmitButton = ({ title, onClick }) => {
    return (
        <div>
            <button type="submit" className={styles.submit}
                onClick={onClick}>{title}</button>
        </div>
    )
}

export default SubmitButton