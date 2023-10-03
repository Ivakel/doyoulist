import { ListItem } from "./ListItem";

export const SideBar = (props) => {
  return (
    <div className="SideBar">
      {props.taskList.map((task) => {
        return <ListItem task={task} />;
      })}
    </div>
  );
};
