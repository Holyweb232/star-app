import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;