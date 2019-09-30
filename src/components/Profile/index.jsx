import React from 'react'
import styles from './style.module.css'
import MyPosts from './MyPosts'
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts/>
        </div>


    )
}

export default Profile;