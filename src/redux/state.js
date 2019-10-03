import {rerenderEntireThree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello, How are you?', likesCount: 12},
            {id: 2, message: 'Hello my friend', likesCount: 17}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Victor'},
            {id: 2, name: 'Kiza'},
            {id: 3, name: 'Tomas'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'how are you'},
            {id: 3, message: 'help'}
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) =>{
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireThree(state);
}
export default state