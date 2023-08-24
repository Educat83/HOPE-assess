import { useRef } from "react";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTask = taskInputRef.current.value;

    if (enteredTask.trim().length > 0) {
      props.onSaveTask(enteredTask);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>Add Task</button>
    </form>
  );
};

export default NewTaskForm;
