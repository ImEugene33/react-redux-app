import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId*" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
