import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { task: "Read the book", id: 1 },
    { task: "Read the books", id: 2 },
    { task: "Read the bookss", id: 3 },
    { task: "Read the booksss", id: 4 },
    { task: "Read the bookssss", id: 5 }
  ]);

  return (
    <TaskListContext.Provider value="{{tasks}}">
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
