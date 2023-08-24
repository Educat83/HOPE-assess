import TaskItem from "./TaskItem";
import MyCard from "../UI/MyCard";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  const taskList = (
    <ul>
      {props.items.map((task) => (
        <TaskItem key={task.id}>{task.text}</TaskItem>
      ))}
    </ul>
  );

  return <MyCard className={classes.mycontainer}>{taskList}</MyCard>;
};

export default Tasks;
