import React from 'react'
import styles from './style.module.css'
import Post from './Post'

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                     key={post.id}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    return (
        <div className={styles.postBlock}>
            <h2>MyPosts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts