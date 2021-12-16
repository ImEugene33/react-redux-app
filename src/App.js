import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">

                    <Route
                        path="/dialogs"
                        render={() => (
                            <DialogsContainer

                            />
                        )}
                    />
                    <Route
                        path="/profile"
                        render={() => <Profile/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
