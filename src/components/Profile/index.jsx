import React from 'react'
import styles from './style.module.css'
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>


    )
}

export default Profile;