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
  // UseState initial value, ternary used to stop restting localstorage on web browser refresh
  const [tasks, setTasks] = useState(
    !localStorage.getItem("tasks") || []
      ? DUMMY_tasks
      : JSON.parse(localStorage.getItem("tasks"))
  );

  // First time app runs to get local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  // Every time dependency tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // UseState to set tasks by destructuring tasks and adding a new object on the array
  // using task identifier with the data from newTask.js
  const addTaskHandler = (task) => {
    setTasks([...tasks, { id: task.id, text: task.text, completed: false }]);
  };

  // TODOS:
  // -Toggle tasks as completed. Use of props to pass data and functions
  const toggleTasksCompleted = (taskId) => {
     setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // -Remove tasks from tasks

  // -Remaining tasks counter

  return (
    <>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} onToggleCompleted={toggleTasksCompleted} />
    </>
  );
}

export default App;
