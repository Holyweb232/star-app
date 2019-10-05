import React from 'react'
import styles from './style.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";


const Textarea = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={styles.Textarea}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Отправить</button>
            </div>
        </div>
    )
}

export default Textarea