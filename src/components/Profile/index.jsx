import React from 'react'
import styles from './style.module.css'
import MyPosts from './MyPosts'
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>


    )
}

export default Profile;