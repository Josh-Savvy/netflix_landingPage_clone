import React from "react";
import MainNavbar from "../../Navbar/MainNavbar";
import SubscriptionBar, { showValidText } from "../../SubscriptionBar";
const firstBoxComponent = () => {
  return (
    <>
      <section className="first-box-component">
        <MainNavbar />
        <div className="center">
          <h1 align="center">
            Unlimited films, TV <br />
            programmes and more.
          </h1>
          <p>Watch anywhere. Cancel at any time</p>
        </div>
        <SubscriptionBar
          inputStyle={{
            padding: "22px 20px 13px 20px ",
            color: "#333",
            marginLeft: "26%",
            borderRadius: "4px 0px 0px 4px",
          }}
          onInput={showValidText}
        />
      </section>
    </>
  );
};

export default firstBoxComponent;
