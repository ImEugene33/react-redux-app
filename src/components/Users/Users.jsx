import React from "react";
import Paginator from './Paginator';
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {


    return (
        <div>
            {/*<div>*/}
            {/*    {pages.map((p) => {*/}
            {/*        return (*/}
            {/*            <span*/}
            {/*                className={props.currentPage === p && styles.selectedPage}*/}
            {/*                onClick={(e) => {*/}
            {/*                    props.onPageChanged(p);*/}
            {/*                }}> {p} </span>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</div>*/}

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>

            {users.map((u) => (
                <User user={u} followingInProgress={props.followingInProgress} key={u.id}
                      unfollow={props.unfollow} follow={props.follow}/>
                //       <div key={u.id}>
                // <span>
                //   <div>
                //     <NavLink to={"/profile/" + u.id}>
                //       <img
                //           src={u.photos.small != null ? u.photos.small : userIcon}
                //           className={styles.userPhoto}
                //       />
                //     </NavLink>
                //   </div>
                //   <div>
                //     {u.followed ? (
                //         <button disabled={props.followingInProgress.some(id => id === u.id)}
                //                 onClick={() => {
                //                     props.unfollow(u.id)
                //                 }}>Unfollow</button>) : (
                //         <button disabled={props.followingInProgress.some(id => id === u.id)}
                //                 onClick={() => {
                //                     props.follow(u.id);
                //                 }}>Follow</button>
                //     )}
                //   </div>
                // </span>
                //           <span>
                //   <div>
                //     <div>{u.name}</div>
                //     <div>{u.status}</div>
                //   </div>
                //   <div>
                //     <div>{"u.location.city"}</div>
                //     <div>{"u.location.country"}</div>
                //   </div>
                // </span>
                //       </div>
            ))}
        </div>
    );
};

export default Users;
