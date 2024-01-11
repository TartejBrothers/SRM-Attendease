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
        <p>OD/ML Taken</p>
      </div>
      <div className="odmaintop">
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
          <p>Attendance With OD/ML</p>
        </div>
        <div className="attendancerecords">
          <div className="attendanceheader">
            <div className="attendancecolumns">Subject</div>
            <div className="attendancecolumns">Current Attendance</div>
            <div className="attendancecolumns">New Attendance</div>
          </div>
          <div className="attendancerows">
            <div className="attendancecolumns">Mathematics</div>
            <div className="attendancecolumns">72.5%</div>
            <div className="attendancecolumns">78%</div>
          </div>
          <div className="attendancerows">
            <div className="attendancecolumns">Chemistry</div>
            <div className="attendancecolumns">85%</div>
            <div className="attendancecolumns">89%</div>
          </div>
          <div className="attendancerows">
            <div className="attendancecolumns">Physics</div>
            <div className="attendancecolumns">67%</div>
            <div className="attendancecolumns">72%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
