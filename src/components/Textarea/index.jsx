import React from 'react'
import styles from './style.module.css'

const Textarea = () => {
    return (
        <div className={styles.Textarea}>
            <textarea></textarea>
            <button>Отправить</button>
        </div>
    )
}

export default Textarea