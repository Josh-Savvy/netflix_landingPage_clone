import React from "react";
import Button from "../Common/Button/button";
import { closeCookiesModal } from "./ModalFunctions";
import "../modals/ModalStyles/style.css";
import {
  cookiesBtnStyleAccept,
  cookiesBtnStylePersonalise,
  cookiesBtnStyleReject,
  cookieStyle,
} from "./ModalStyles/styles";

const CookiesModal = () => {
  return (
    <div style={cookieStyle} className="cookies-modal" id="cookies-modal">
      <i
        className="fa fa-times close-btn"
        onClick={closeCookiesModal}
      ></i>
      <p>
        Netflix and <a href="#">third parties</a> use{" "}
        <a href="#">cookies and similar technologies </a> on this website to
        collect information about your browsing activities, which we use to
        analyse your use of the website, to personalise our services and to
        customise our online advertisements. When your consent is required, you
        can accept, refuse or personalise your choices. You can also change your
        preferences at any time by clicking “Cookie Preferences” in the footer
        of each page. Netflix supports the Digital Advertising Alliance
        Principles.{" "}
        <a href="#">Learn more about our use of cookies and information.</a>
      </p>
      <Button
        title="Accept"
        btnStyle={cookiesBtnStyleAccept}
        Click={closeCookiesModal}
      />
      <Button
        title="Reject"
        btnStyle={cookiesBtnStyleReject}
        Click={closeCookiesModal}
      />
      <Button
        title="Personalise my choices"
        btnStyle={cookiesBtnStylePersonalise}
      />
    </div>
  );
};

export default CookiesModal;
