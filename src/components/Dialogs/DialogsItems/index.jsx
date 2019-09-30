import React from 'react'
import styles from './../style.module.css'
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItems