import React from 'react'
import styles from './style.module.css'
import Post from './Post'
import Textarea from '../../Textarea'

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);
    return (
        <div className={styles.postBlock}>
            <h2>MyPosts</h2>
            <Textarea addPost={props.addPost}/>
            <div className={styles.posts}>
                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts