import React from "react";
export const showValidText = () => {
  let x = document.getElementById("validText");
  x.style.display = "block";
};
const SubscriptionBar = ({ inputStyle, onInput }) => {
  return (
    <div className="sub-bar" style={{ marginLeft: "30px" }}>
      <p align="center" style={style}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form action="/">
        <input
          type="email"
          size="50"
          placeholder="Email Address"
          style={inputStyle}
          onInput={onInput}
          id="emailInput"
          title="Please incude an '@' in the email address"
        />
        <span>
          <button type="submit" style={submitBtn}>
            Get Started
            <i
              className="fa fa-angle-right"
              style={{ fontSize: "30px", fontWeight: "50", marginLeft: "10px" }}
            ></i>
          </button>
        </span>
      </form>
      <cite
        id="validText"
        style={{ display: "none", color: "#ffa00a", marginLeft: "-200px" }}
        align="center"
      >
        Please enter a valid email address
      </cite>
    </div>
  );
};

export default SubscriptionBar;

const style = {
  fontSize: "18px",
  fontWeight: "400",
};
const submitBtn = {
  color: "#fff",
  background: "#e50914",
  border: "none",
  padding: "10px 25px",
  fontSize: "28px",
  borderLeft: "#333 1px solid",
  whiteSpace: "nowrap",
  borderRadius: "0px 4px 4px 0px",
};
