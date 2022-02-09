import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {Redirect, useRouteMatch} from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        // let userId = this.props.params.userId ? this.props.params.userId : '2';
        let userId = this.props.match ? this.props.match.params.userId : '2';
        // let userId = this.props.params.userId ;
        // if(!userId){
        //     userId='2';
        // }
        this.props.getUserProfile(userId);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, isAuth: state.auth.isAuth})

// let WithUrlDataContainerComponent = withRouter(ProfileContainer); //1 метод-устаревший, выпилили в react6

//  const WithUrlDataContainerComponent = (props) => { //2 метод-устаревший, но рабочий, дает доступ к params
//     const params = useParams();
//      return <ProfileContainer {...props} params={params}/>;
// }

const WithUrlDataContainerComponent = (props) => { //3 метод-новый, аналогичен withRoute, но более продвинутый
    const match = useRouteMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
}

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
