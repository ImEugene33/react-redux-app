import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sociality.jpg";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                src={logo}
                alt="logo"
            />
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login}
                    <button onClick={props.logout}>Log Out</button>
                </div> : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
