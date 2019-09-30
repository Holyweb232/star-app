import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
    {id: 1, message: 'Hello, How are you?', likesCount: 12},
    {id: 2, message: 'Hello my friend', likesCount: 17}
]

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

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

serviceWorker.unregister();
