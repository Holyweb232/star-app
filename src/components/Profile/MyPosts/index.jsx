import React from 'react'
import styles from './style.module.css'
import Post from './Post'
import Textarea from '../../Textarea'

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hello, How are you?', likesCount: 12},
        {id: 2, message: 'Hello my friend', likesCount: 17}
    ]
    let postsElement = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={styles.postBlock}>
            <h2>MyPosts</h2>
            <Textarea/>
            <div className={styles.posts}>
                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts