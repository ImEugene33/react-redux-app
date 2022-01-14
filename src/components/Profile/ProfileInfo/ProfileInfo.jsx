import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from '../../Common/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
  return (
    <div>
      <div>
        <img
          className={style.heroImage}
          src="https://ychef.files.bbci.co.uk/976x549/p051y4n8.jpg"
          alt="hero"
        />
      </div>
      <div className={style.descriptionBlock}>
          <img src={props.profile.photos.large}/>
        <img
          className={style.avatar}
          src="https://pinster.ru/cache/7c30d78b/avcd43ac08ca90bc0fb74.jpeg"
          alt="cat"
        />
        description
      </div>
    </div>
  );
};

export default ProfileInfo;
