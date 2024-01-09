import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/project.css";
import "./styles/global.css";
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
        </div>
      </div>
    </div>
  );
}
