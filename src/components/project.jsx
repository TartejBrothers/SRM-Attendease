import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles/project.css";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/global.css";
export default function ProjectPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="projectbody">
      <h1>
        SRM ATTEND<font color="#00ADB5">EASE</font>
      </h1>
      <h5>Pick a single date or add a range</h5>
      <div>
        <div className="dateform">
          <DatePicker
            wrapperClassName="date"
            selected={startDate}
            selectsStart
            startDate={startDate}
            placeholderText="Select Start Date"
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            wrapperClassName="date"
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
