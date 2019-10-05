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

                    <Route  path="/profile" render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}  />}/>
                    <Route  path="/dialogs" render={() => <Dialogs store={props.store}/>}/>

                </div>
            </div>


    )
}

export default App;