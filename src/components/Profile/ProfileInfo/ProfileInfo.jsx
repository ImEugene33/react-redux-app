import React, { useState, useEffect, useRef } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";
import userPhoto from "../../../assets/images/user-icon.png";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import { Button } from "@mui/material";
import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "a1e1af33-ed96-4178-924e-0d18de8ee9bc" },
});

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await instance.get(`profile/21914`);
      saveProfile(data.data);
    };
    getData();
  }, [editMode, saveProfile]);

  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  //   const onSubmit = ({ values }) => {
  //     console.log(values);
  //     //  console.log(formValueRef.current.values);
  //     // saveProfile(profile);
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
            saveProfile={saveProfile}
            // onSubmit={onSubmit}
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
      <div>Looking for a job: {profile.lookingForAJob ? "yes" : " no"}</div>
      <div>Jod description: {profile.lookingForAJobDescription}</div>
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
      {contactTitle}: {ContactValue}
    </li>
  );
};

export default ProfileInfo;
