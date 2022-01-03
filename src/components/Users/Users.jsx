import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

  if (props.users.length === 0) {

    props.setUsers([
      {
        id: 1,
        photoUrl:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSItzycIeFZeM3NfL23OYQijcQd4JykiKtFGaaqzWJBV6oChPZO",
        followed: true,
        fullName: "Jhonny",
        status: "Best cowboy on the middle west ",
        location: {city: "Kansas", country: "Missouri"},
      },
      {
        id: 2,
        photoUrl:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxYoM6hUWyiJZY3sbu7M2v3Q_-NcZRIyXQ6FLceopBznMTlR4t",
        followed: true,
        fullName: "Billy",
        status: "Best theif on the middle west ",
        location: {city: "Austin", country: "Texas"},
      },
      {
        id: 3,
        photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsN4rM0Z3VP_B4fixmUHQvJfRFxTgsZvldzA&usqp=CAU",
        followed: false,
        fullName: "Bob",
        status: "Best sheriff on the middle west ",
        location: {city: "Dallas", country: "Texas"},
      },
    ]);
  }

  return (
      <div>
        {props.users.map((u) => (
            <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed ? (
                  <button
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                  >
                    Unfollow
                  </button>
              ) : (
                  <button
                      onClick={() => {
                        props.follow(u.id);
                      }}
                  >
                    Follow
                  </button>
              )}
            </div>
          </span>
              <span>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </div>
          </span>
            </div>
        ))}
      </div>
  );
};

export default Users;
