import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

export const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list"></ul>
    </div>
  );
};
