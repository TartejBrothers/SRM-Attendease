import React from "react";
import "./styles/global.css";
import "./styles/attendance.css";
import { Link } from "react-router-dom";
export default function AttendancePage() {
  return (
    <div className="attendancecontent">
      <h1>
        SRM ATTEND<font color="#00ADB5">EASE</font>
      </h1>
      <div className="attendancebody">
        <p>Current Attendance</p>
        <div className="attendancerecords">
          <div className="attendanceheader">
            <div className="attendancecolumns">Subject</div>
            <div className="attendancecolumns">Attendance</div>
            <div className="attendancecolumns">Margin</div>
            <div className="attendancecolumns">Required</div>
          </div>
          <div className="attendancerows">
            <div className="attendancecolumns">Mathematics</div>
            <div className="attendancecolumns">78%</div>
            <div className="attendancecolumns">2</div>
            <div className="attendancecolumns">0</div>
          </div>
          <div className="attendancerows">
            <div className="attendancecolumns">Chemistry</div>
            <div className="attendancecolumns">89%</div>
            <div className="attendancecolumns">3</div>
            <div className="attendancecolumns">3</div>
          </div>
          <div className="attendancerows">
            <div className="attendancecolumns">Physics</div>
            <div className="attendancecolumns">72%</div>
            <div className="attendancecolumns">3</div>
            <div className="attendancecolumns">3</div>
          </div>
        </div>
      </div>
      <Link to="/project">
        <button className="submitbutton calculatebutton">
          Check Your Atttendance With OD/ML
        </button>
      </Link>
    </div>
  );
}
