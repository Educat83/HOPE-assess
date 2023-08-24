import { useRef, useState } from "react";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTask = taskInputRef.current.value;

    if (enteredTask.trim().length > 0) {
      props.onSaveTask(enteredTask);
      setNewTask("");
    }
  };

  const changeHandler = (event) => {setNewTask(event.target.value)}


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        ref={taskInputRef}
        value={newTask}
        onChange={changeHandler}
        placeholder="Add a new task"
      />
      <button>Add Task</button>
    </form>
  );
};

export default NewTaskForm;
