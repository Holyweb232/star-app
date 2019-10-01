import React from 'react'
import styles from './style.module.css'

const Textarea = () => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div className={styles.Textarea}>
            <div>
                <textarea ref={newPostElement}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Отправить</button>
            </div>
        </div>
    )
}

export default Textarea