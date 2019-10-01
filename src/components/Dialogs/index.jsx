import React from 'react'
import styles from './style.module.css'
import DialogsItems from "./DialogsItems"
import Message from "./Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = props.state.messages.map(message => <Message message={message.message} key={message.id}/>);

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