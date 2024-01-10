import React from "react";
import "./styles/global.css";
import "./styles/od.css";

export default function OdPage() {
  return (
    <div className="odcontent">
      <h1>
        SRM ATTEND<font color="#00ADB5">EASE</font>
      </h1>
      <div className="odbody">
        <p>Your Attendance With OD’s</p>
      </div>
      <div className="odmaintop">
        <div className="odheader">
          <h5>OD’s Taken</h5>
        </div>
        <div className="odcontentbody">
          <p>15th November</p>
        </div>
        <div className="odcontentbody">
          <p>18th November</p>
        </div>
        <div className="odcontentbody">
          <p>22nd - 30th November</p>
        </div>
      </div>
      <div className="odmainbottom">
        <div className="odheader">
          <h5>Attendance with OD</h5>
        </div>
        <div className="odcontentbodybottom">
          <div className="bottomcontent">Advanced Calculus</div>
          <div className="bottomcontent">87.4%</div>
        </div>
        <div className="odcontentbodybottom">
          <div className="bottomcontent">OOPS</div>
          <div className="bottomcontent">91.2%</div>
        </div>
        <div className="odcontentbodybottom">
          <div className="bottomcontent">EGD</div>
          <div className="bottomcontent">90.5%</div>
        </div>
      </div>
    </div>
  );
}
