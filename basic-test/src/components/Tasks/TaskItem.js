import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  // TODO: -Add html elements to be able to remove and toggle completed status

  return <li className={classes.task}>{props.children}</li>;
};

export default TaskItem;
