import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1020095/draw_svg20210507-22909-1scw2hm.svg.png"
                alt="logo"
            />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/Login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
