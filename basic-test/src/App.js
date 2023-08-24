import { useState, useEffect } from "react";

import NewTask from "./components/NewTask/NewTask";
import Tasks from "../src/components/Tasks/Tasks";

import "./App.css";

const DUMMY_tasks = [
  {
    id: 1,
    text: "Supermarket shop",
    completed: false,
  },
  {
    id: 2,
    text: "Batch cook for the week",
    completed: false,
  },
  {
    id: 3,
    text: "Learn React with a full belly",
    completed: false,
  },
  {
    id: 4,
    text: "Get a job as React dev",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_tasks);


  useEffect(() => {

  }, [tasks]);

  const taskAddHandler = (task) => {

  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} />
    </>
  );
}

export default App;
