import React from 'react'
import styles from './style.module.css'
import Post from './Post'
import Textarea from '../../Textarea'

const MyPosts = () => {
    return (
        <div className={styles.MyPosts}>
            <h2>MyPosts</h2>
            <Textarea/>
            <Post message="Hello, How are you? "/>
            <Post message="Hello my friend"/>

        </div>
    )
}

export default MyPosts