import React from "react";
import styles from "./users.module.css";
import userIcon from "../../assets/images/user-icon.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow, id, ...props}) => {


    return (

        <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                    src={user.photos.small != null ? user.photos.small : userIcon}
                    className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                  <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id)
                          }}>Unfollow</button>) : (
                  <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id);
                          }}>Follow</button>
              )}
            </div>
          </span>
            <span>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{"user.location.city"}</div>
              <div>{"user.location.country"}</div>
            </div>
          </span>
        </div>
    )
}


export default User;
