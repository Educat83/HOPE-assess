import TaskItem from "./TaskItem";
import MyCard from "../UI/MyCard";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  const tasks = props.items;

  const taskList = (
    <ul>
      {tasks !== ""
        ? tasks.map((task) => <TaskItem key={task.id}>{task.text}</TaskItem>)
        : <p className={classes.emptyList}>Your tasks will show here!</p>}
    </ul>
  );

  return <MyCard className={classes.mycontainer}>{taskList}</MyCard>;
};

export default Tasks;
