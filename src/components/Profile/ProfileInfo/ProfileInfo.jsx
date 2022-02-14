import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from '../../Common/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
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
                <img src={props.profile.photos.large}/>
                <img
                    className={style.avatar}
                    src="https://pinster.ru/cache/7c30d78b/avcd43ac08ca90bc0fb74.jpeg"
                    alt="cat"
                />
                description
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
