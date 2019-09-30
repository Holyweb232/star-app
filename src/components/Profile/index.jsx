import React from 'react'
import styles from './style.module.css'
import MyPosts from './MyPosts'
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    let posts = [
        {id: 1, message: 'Hello, How are you?', likesCount: 12},
        {id: 2, message: 'Hello my friend', likesCount: 17}
    ]
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>


    )
}

export default Profile;