import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  updateStatus,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);

    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
    // let userId = this.props.params.userId ? this.props.params.userId : '2';
    // let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId

    //     if (!userId) {
    //         this.props.history.push('/login')
    //     }
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        savePhoto={this.props.savePhoto}
        updateStaus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer); //1 метод-устаревший, выпилили в react6

// const WithUrlDataContainerComponent = (props) => { //2 метод-рабочий, дает доступ к params
//     const params = useParams();
//     return <ProfileContainer {...props} params={params}/>;
// }

// const WithUrlDataContainerComponent = (props) => { //3 метод-новый, аналогичен withRoute, но более продвинутый
//     const match = useRouteMatch('/profile/:userId/');
//     return <ProfileContainer {...props} match={match}/>;
// }

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter
)(ProfileContainer);
