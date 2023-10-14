import React, { useState } from "react";
//import { ReactCalendar } from "./ReactCalendar";
import "../styles/AddTask.css";
import BasicDatePicker from "./BasicDatePicker";

export const AddTask = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="AddTask">
      <BasicDatePicker date={date} setDate={setDate} />
      {date.toString()}
    </div>
  );
};
