import { useState } from "react";
import { MainHome } from "./components/MainHome";
import { NavBar } from "./components/NavBar";

export const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <div className="Home">
      <NavBar setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
      <MainHome showAddTask={showAddTask} />
    </div>
  );
};
