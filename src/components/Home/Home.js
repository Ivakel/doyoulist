import { useContext, useState } from "react";
import { MainHome } from "./components/MainHome";
import { NavBar } from "./components/NavBar";
import { User } from "../Helper/Context";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const { user } = useContext(User);
  const [showAddTask, setShowAddTask] = useState(false);
  const [toggle, setToggle] = useState(false);
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="Home">
      <NavBar
        setShowAddTask={setShowAddTask}
        showAddTask={showAddTask}
        toggle={toggle}
        setToggle={setToggle}
      />
      <MainHome showAddTask={showAddTask} user={user} toggle={toggle} />
    </div>
  );
};
