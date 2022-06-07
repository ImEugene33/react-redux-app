import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import {HashRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/Common/Preloader';
import store from './redux/redux-store';
import {StyledEngineProvider} from '@mui/material/styles';

// const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId*" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

let BlogJsApp = (props) => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <AppContainer/>
            </StyledEngineProvider>
        </Provider>
    </HashRouter>
}
export default BlogJsApp;