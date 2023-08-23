import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  const taskList = (
    <ul>
      {props.items.map((task) => (
        <TaskItem key={task.id}>{task.text}</TaskItem>
      ))}
    </ul>
  );

  return (
    <>
      <div className={classes.mycontainer}>{taskList}</div>
    </>
  );
};

export default Tasks;
