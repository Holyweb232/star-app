import React from 'react'
import styles from './style.module.css'
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Kiza'},
        {id: 3, name: 'Tomas'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'help'}
    ]
 
    let dialogsElements = dialogs.map(dialog => <DialogsItems name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message =>  <Message message={message.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs