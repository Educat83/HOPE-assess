import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  // TODO: -Add html elements to be able to remove and toggle completed status
  const completedToggleHandler = () => {
    props.onToggle(props.taskItem.id)
  };

  return (
    <li className={props.taskItem.completed ? `task ${classes.completed}` : "task"}>
      <label htmlFor="completed">{!props.taskItem.completed ? 'Pending' : "Done"}</label>
      <input type="checkbox" checked={props.taskItem.completed}  onChange={completedToggleHandler}/>
      <span>{props.children}</span>
      <div>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
