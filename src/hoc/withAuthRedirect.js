import {Redirect, useRouteMatch} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';


let mapStateToPropsForRedirect = (state) => ({isAuth: state.auth.isAuth})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component{...this.props}/>
        }
    }

    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connectedAuthRedirectComponent;
}

export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useRouteMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}