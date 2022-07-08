import React, { useState, useEffect } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";
import userPhoto from "../../../assets/images/user-icon.png";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import { Button } from "@mui/material";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  const [editMode, setEditMode] = useState(false);

  //   useEffect(() => {
  //     ProfileDataForm();
  //   }, []);

  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  //   const onSubmit = () => {
  //     setEditMode(false);
  //   };

  return (
    <div>
      <div>
        <img
          className={style.heroImage}
          src="http://www.wincore.ru/uploads/posts/2015-07/1435764975_img9.jpg"
          alt="hero"
        />
      </div>
      <div className={style.descriptionBlock}>
        <img alt="ava" src={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
            updateStatus={updateStatus}
            profile={profile}
            toEditMode={() => {
              setEditMode(false);
            }}
          />
        ) : (
          <ProfileData
            toEditMode={() => {
              setEditMode(true);
            }}
            isOwner={isOwner}
            profile={profile}
          />
        )}
        Status:{" "}
        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      <div>
        {isOwner && (
          <Button onClick={toEditMode} variant="contained" size="small">
            Edit
          </Button>
        )}
      </div>
      <div>Full name: {profile.fullName}</div>
      <div>Looking for a job:{profile.lookingForAJob ? "yes" : " no"}</div>
      <div>My professional skills:{profile.lookingForAJobDescription}</div>
      <div>About me: {profile.aboutMe}</div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              ContactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, ContactValue }) => {
  return (
    <li>
      {contactTitle}:{ContactValue}
    </li>
  );
};

export default ProfileInfo;
