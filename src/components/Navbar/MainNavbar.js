import "./MainNavbarStyles/style.css";
import Logo from "../../Images/logo.png";
import React from "react";
import Button from "../Common/Button/button";
import { btnStyle } from "./MainNavbarStyles/style";
import "./MainNavbarStyles/style.css";
import LanguagesSelect from "./LanguagesSelect";
const mainNavbar = () => {
  return (
    <div className="main-nav-bar">
      <span style={{ marginLeft: "2%" }}>
        <img src={Logo} width="170px" height="100px" alt="" />
      </span>
      <div
      className="select"
      style={{ float: "right", marginTop: "3%", marginRight: "7%" }}
    >
      <LanguagesSelect/>
        <Button
          title="Sign-In"
          btnStyle={btnStyle}
          Click={() => {
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
};

export default mainNavbar;
