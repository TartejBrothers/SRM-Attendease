import React from "react";
import "./styles/home.css";
import eye from "./images/eye.png";
import homeleft from "./images/homeleft.png";
import homeright from "./images/homeright.png";
import vector1 from "./images/vectors/vector1.png";
import vector2 from "./images/vectors/vector2.png";
import vector3 from "./images/vectors/vector3.png";
import { Link } from "react-router-dom";
export default function homepage() {
  const changeType = () => {
    var passwordfield = document.getElementById("password");
    if (passwordfield.type === "password") {
      passwordfield.type = "text";
    } else {
      passwordfield.type = "password";
    }
  };
  return (
    <div className="homebody">
      <div className="homecontent">
        <div className="homeheader">
          <h1>
            SRM ATTEND<font color="#00ADB5">EASE</font>
          </h1>
          <p>A Portal To Assist You In Your Attendance Calculations</p>
        </div>
        <div className="homeform">
          <form className="loginform">
            <h4>Login with your Academia Details</h4>
            <div className="forminner">
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
              <Link to="/project">
                <button type="submit" className="loginbutton">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
        <h2 className="bottomtext">
          Sit back and let us do all the heavy work
        </h2>
      </div>
      <div className="imgleft" id="vectorimg">
        <img src={homeleft} alt="home" />
      </div>
      <div className="imgright" id="vectorimg">
        <img src={homeright} alt="home" />
      </div>
      <div className="vector1" id="vectorimg">
        <img src={vector1} alt="vector" />
      </div>
      <div className="vector2" id="vectorimg">
        <img src={vector2} alt="vector" />
      </div>
      <div className="vector3" id="vectorimg">
        <img src={vector3} alt="vector" />
      </div>
    </div>
  );
}
