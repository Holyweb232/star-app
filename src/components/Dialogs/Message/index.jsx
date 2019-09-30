import React from 'react'
import styles from './../style.module.css'

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export default Message