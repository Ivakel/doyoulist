import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

export const TimeSelector = (props) => {
  const [value, onChange] = useState("10:00");

  props.setTime(value);

  return (
    <div className="TimeSelector">
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
};
