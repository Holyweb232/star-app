import React from 'react'
import styles from './style.module.css'

const Textarea = () => {
    return (
        <div className={styles.Textarea}>
            <div>
                <textarea>
                </textarea>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </div>
    )
}

export default Textarea