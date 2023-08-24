import { useRef, useState } from "react";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = (props) => {
  // UseState to clear input value
  const [taskValue, setTaskValue] = useState("");
  // UseRef to target the input value
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTask = taskInputRef.current.value;

    if (enteredTask.trim().length > 0) {
      props.onSaveTask(enteredTask);//Data to parent NewTask.js
      setTaskValue("");//Clear function
    }
  };
  // Event listener to update input value
  const changeHandler = (event) => {
    setTaskValue(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        ref={taskInputRef}
        value={taskValue}
        onChange={changeHandler}
        placeholder="Add a new task"
      />
      <button>Add Task</button>
    </form>
  );
};

export default NewTaskForm;
