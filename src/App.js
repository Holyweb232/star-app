import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    {/*<Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>*/}

                    <Route  path="/profile" render={() => <Profile />}/>
                    <Route  path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route  path="/users" render={() => <UsersContainer />}/>

                </div>
            </div>


    )
};

export default App;