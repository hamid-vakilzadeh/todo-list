import React from "react";
import AddNewTodo from "./AddNewTodo";
import Calendar from "./Calendar";
import Projects from "./Projects";


function Sidebar() {
    
  return (
    <div className="Sidebar">
      <AddNewTodo />
      <Calendar />
      <Projects />
    </div>
  );
}

export default Sidebar;