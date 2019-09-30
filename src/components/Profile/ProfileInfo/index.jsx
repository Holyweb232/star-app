import React from 'react'
import styles from './style.module.css'

const ProfileInfo = () => {
    return(
        <div>
            <img src="https://igreen.in.ua/images/lilDogsWall.png" alt="dogs"/>
            <div className={styles.descriptionBlock}>
                Описание
            </div>
        </div>
    )
}

export default ProfileInfo