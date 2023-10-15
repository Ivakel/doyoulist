import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DateSelector = (props) => {
  return (
    <div className="DateSelector">
      <DatePicker
        selected={props.date}
        onChange={(date) => {
          props.setDate(date);
        }}
      />
    </div>
  );
};
