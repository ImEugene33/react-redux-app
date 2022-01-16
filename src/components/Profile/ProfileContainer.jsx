import React from "react";
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {useParams, withRouter, useRouteMatch} from 'react-router-dom';



// const WithUrlDataContainerComponent = (props) => {
//     const match = useRouteMatch('/profile/:userId/');
//     return <ProfileContainer {...props} match={match} />;
// }

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.params.userId ? this.props.params.userId : '2';
        // let userId = this.props.match ? this.props.match.params.userId : '2';
        // let userId = this.props.params.userId ;
        // if(!userId){
        //     userId='2';
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};
let mapStateToProps = (state) => ({profile: state.profilePage.profile})

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

const WithUrlDataContainerComponent = (props) => {
    const params = useParams();
    return <ProfileContainer {...props} params={params}/>;
}


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
