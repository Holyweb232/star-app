import React from 'react'
import styles from './style.module.css'

const Post = (props) => {

    return (
        <div className={styles.item}>
            <img src="https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png" alt="avatar"/>
            <h5>{props.message}</h5>
            <p>{"like" + props.likesCount}</p>
        </div>
    )
}

export default Post