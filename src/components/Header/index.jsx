import React from 'react'
import Bounce from './../Bounce'
import styles from './style.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Bounce/>
        </header>
    )
}

export default Header;