import React, { useState } from "react";
import Axios from "axios";
import "../styles/AddTask.css";
import { DateSelector } from "./DateSelector";
import { TimeSelector } from "./TimeSelector";
import { TaskInput } from "./TaskInput";

const api = Axios.create({ baseURL: "http://localhost:5000" });

export const AddTask = ({ user, setTasks, setAdded, setLoading, loading }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const showAdded = () => {
    setLoading(false);
    setAdded(true);

    setTimeout(() => setAdded(false), 3000);
  };

  const handleSubmit = () => {
    if (loading) {
      console.log("cancelled");
      return;
    }
    try {
      setLoading(true);
      api
        .post("/add", {
          date,
          time,
          taskName,
          taskDescription,
          firebaseId: user.uid,
        })
        .then((res) => {
          setTasks(res.data.taskList);
          showAdded();
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
