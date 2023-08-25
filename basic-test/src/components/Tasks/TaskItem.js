import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  // TODO: -Add html elements to be able to remove and toggle completed status
  const selectedTaksId = props.taskItem.id;

  const completedToggleHandler = () => {
    props.onToggle(selectedTaksId)

  };

  const removeTaskHandler = () => {
    props.onRemove(selectedTaksId)

  };

  return (
    <li className={props.taskItem.completed ? `${classes.task} ${classes.completed}` : classes.task}>
      <label htmlFor="completed">{!props.taskItem.completed ? 'Pending' : "Done"}</label>
      <input type="checkbox" checked={props.taskItem.completed}  onChange={completedToggleHandler}/>
      <span>{props.children}</span>
      <div>
        <button onClick={removeTaskHandler}>X</button>
      </div>
    </li>
  );
};

export default TaskItem;
