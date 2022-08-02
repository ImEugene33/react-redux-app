import React, { useState, useEffect, useRef } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader";
import userPhoto from "../../../assets/images/user-icon.png";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import { Button, Container, Icon } from "@mui/material";
import logo from "../../../assets/images/megaphone-icon-45758.png";
import { Box } from "@mui/system";



const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
  setProfile,

}) => {
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await instance.get(`profile/21914`);
  //     saveProfile(data.data);
  //   };
  //   getData();
  // }, [editMode, saveProfile]);

  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  // const onSubmit = ({ values }) => {
  //   console.log(values);
  //    console.log(formValueRef.current.values);
  //   saveProfile(profile);
  // };

  return (
    <div>
      <Box className={style.heroImage}>

        <img className={style.imageIcon} src={logo} />

        <h3 className={style.heroHeader}>Members Newsfeed</h3>
        <div className={style.heroText}>Check what your friends have been up to!</div>
      </Box>


      <div className={style.descriptionBlock}>
        <img className={style.avatar} alt="ava" src={profile.photos.large || userPhoto} />
        {isOwner && <input className={style.input} id={'input'} type={"file"} onChange={onPhotoSelected} />}
        <label htmlFor="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
          <span>Choose a file…</span>
        </label>
        {editMode ? (
          <ProfileDataForm
            saveProfile={saveProfile}
            profile={profile}
            setProfile={setProfile}
            toEditMode={(newProfile) => {
              setProfile(newProfile)
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
        <div className={style.status}>
          Status:  <ProfileStatusHooks status={status} updateStatus={updateStatus} />
        </div>
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
