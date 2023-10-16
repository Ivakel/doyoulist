import React, { useState } from "react";
import Axios from "axios";
import "../styles/AddTask.css";
import { DateSelector } from "./DateSelector";
import { TimeSelector } from "./TimeSelector";
import { TaskInput } from "./TaskInput";
const api = Axios.create({ baseURL: "http://localhost:5000" });

export const AddTask = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = () => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    try {
      api
        .post("/add", { day, month, year, time, taskName, taskDescription })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddTask">
      <div className="details">
        <TaskInput
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
        />
      </div>
      <div className="date-time">
        <div className="date">
          <DateSelector setDate={setDate} date={date} />
        </div>

        <TimeSelector setTime={setTime} />
      </div>
      <button onClick={handleSubmit} type="button" className="add-task">
        Add task
      </button>
    </div>
  );
};
