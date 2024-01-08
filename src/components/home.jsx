import React from "react";
import "./styles/home.css";
import eye from "./images/eye.png";
export default function homepage() {
  const changeType = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <div className="homebody">
      <div className="homeheader">
        <h1>
          SRM ATTEND<font color="#00ADB5">EASE</font>
        </h1>
        <p>A Portal To Assist You In Your Attendance Calculations</p>
      </div>
      <div className="homeform">
        <form>
          <h4>Login with your Academia Details</h4>
          <p>Glad you’re back.!</p>
          <input
            type="text"
            name="ID"
            placeholder="User ID"
            style={{ marginBottom: "20px" }}
            required
          />
          <div className="inputfield">
            <img
              src={eye}
              alt="password"
              className="passwordicon"
              onClick={changeType}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              id="password"
            />
          </div>
          <div className="rememberbox">
            <input type="checkbox" name="remember" />
            <p>Remember Me</p>
          </div>
          <button type="submit" className="loginbutton">
            Login
          </button>
        </form>
      </div>
      <h2>Sit back and let us do all the heavy work</h2>
    </div>
  );
}
