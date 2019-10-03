import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Dialogs from "./components/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>*/}

                    <Route  path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route  path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                </div>
            </div>


    )
}

export default App;