import profileReducer from "./reducer/profile-reducer";
import dialogsReducer from "./reducer/dialogs-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";

let oldstore = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, How are you?', likesCount: 12},
                {id: 2, message: 'Hello my friend', likesCount: 17}
            ],
            newPostText: 'testers'
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
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default oldstore;
window.store = oldstore;