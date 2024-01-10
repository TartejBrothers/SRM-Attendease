import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/global.css";
import "./styles/project.css";
import { Link } from "react-router-dom";
export default function ProjectPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="projectcontent">
      <h1>
        SRM ATTEND<font color="#00ADB5">EASE</font>
      </h1>
      <div className="projectbody">
        <h5>Pick a single date or add a range</h5>
        <form>
          <div className="dateform">
            <DatePicker
              wrapperClassName="datePicker"
              placeholderText="Select Start Date"
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              wrapperClassName="datePicker"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              placeholderText="Select End Date"
              endDate={endDate}
              minDate={startDate}
              onChange={(date) => setEndDate(date)}
            />
            <button type="submit" className="submitbutton">
              Add To Records
            </button>
          </div>
        </form>
      </div>
      <div className="datesadded">
        <div className="datemain">
          <h5>Dates Added</h5>
        </div>
        <div className="datebody">15th November</div>
        <div className="datebody">18th November</div>
        <div className="datebody">22nd - 30th November </div>
      </div>
      <Link to="/od">
        <button type="submit" className="submitbutton calculatebutton">
          Calculate
        </button>
      </Link>
    </div>
  );
}
