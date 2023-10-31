import React, { useState } from "react";

import "../styles/AddTask.css";
import { DateSelector } from "./DateSelector";
import { TimeSelector } from "./TimeSelector";
import { TaskInput } from "./TaskInput";
import api from "../../../api/apis";

export const AddTask = ({ user, setTasks, setAdded, setLoading, loading }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [addtaskError, setAddtaskError] = useState(false);

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
      setAddtaskError(true);
    }
  };

  return (
    <div className="AddTask">
      {addtaskError && <p className="addtask-error">Unable to add task</p>}
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
