import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1020095/draw_svg20210507-22909-1scw2hm.svg.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
