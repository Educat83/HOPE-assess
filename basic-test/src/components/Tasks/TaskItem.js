import { useState } from "react";

import classes from "./TaskItem.module.css";
import MyCard from "../UI/MyCard";

const TaskItem = (props) => {
  // Use of state to seting editing state and to save the edited text
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.taskItem.text);
  // TODO: -Add html elements to be able to remove and toggle completed status
  const selectedTaksId = props.taskItem.id; //Avoiding code DRY

  const completedToggleHandler = () => {
    props.onToggle(selectedTaksId);
  };

  const removeTaskHandler = () => {
    props.onRemove(selectedTaksId);
  };

  // Setting editing state
  const editingToggleHandler = () => {
    setEditing(true);
  };

  // Reading text value
  const textChangeHandler = (event) => {
    setEditedText(event.target.value);
  };

  // Saving text value passing data to parent and clearing editing state
  const editTextSaveHandler = () => {
    props.onUpdate(props.taskItem.id, editedText);
    setEditing(false);
  };

  // JSX variable to clean return. Ternary to show different elements between editing states
  const inputActions = editing ? (
    <>
      <div className={classes.taskInput}>
        <input type="text" value={editedText} onChange={textChangeHandler} />
      </div>
      <div className={classes.taskActions}>
        <div className={classes.taskButton}>
          <button className={classes.saveButton} onClick={editTextSaveHandler}>
            Save
          </button>
        </div>
        <div className={classes.taskButton}>
          <button className={classes.deleteButton} onClick={removeTaskHandler}>
            X
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className={classes.taskText}>
        <span>{props.taskItem.text}</span>
      </div>
      <div className={classes.taskActions}>
        <div className={classes.taskButton}>
          <button className={classes.editButton} onClick={editingToggleHandler}>
            Edit
          </button>
        </div>
        <div className={classes.taskButton}>
          <button className={classes.deleteButton} onClick={removeTaskHandler}>
            X
          </button>
        </div>
      </div>
    </>
  );

  return (
    <MyCard>
      <li
        className={
          props.taskItem.completed
            ? `${classes.task} ${classes.completed}`
            : classes.task
        }
      >
        <label htmlFor="completed">
          {!props.taskItem.completed ? "Pending" : "Done"}
        </label>
        <input
          type="checkbox"
          checked={props.taskItem.completed}
          onChange={completedToggleHandler}
        />
        <div className={classes.taskContent}>{inputActions}</div>
      </li>
    </MyCard>
  );
};

export default TaskItem;
