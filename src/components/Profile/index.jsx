import React from 'react'
import styles from './style.module.css'
import MyPosts from './MyPosts'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src="https://igreen.in.ua/images/lilDogsWall.png" alt="dogs"/>
            <MyPosts/>
        </div>


    )
}

export default Profile;