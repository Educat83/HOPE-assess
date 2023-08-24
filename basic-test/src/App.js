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
  // UseState initial value
  const [tasks, setTasks] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = (task) => {
    setTasks([...tasks, { id: task.id, text: task.text, completed: false }]);
  };

  return (
    <>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} />
    </>
  );
}

export default App;
