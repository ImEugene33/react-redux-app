import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from '../../Common/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
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
                <img src={profile.photos.large}/>
                <img
                    className={style.avatar}
                    src="https://pinster.ru/cache/7c30d78b/avcd43ac08ca90bc0fb74.jpeg"
                    alt="cat"
                />
                description
                <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
