import Calendar from "react-calendar";
import "../styles/ReactCalendar.css";
export const ReactCalendar = (props) => {
  return (
    <div className="ReactCalendar">
      <Calendar
        className="Calendar"
        showWeekNumbers
        onChange={props.onChange}
        value={props.date}
      />
    </div>
  );
};
