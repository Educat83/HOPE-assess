import TaskItem from "./TaskItem";
import MyCard from "../UI/MyCard";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  const tasks = props.items;
  // Ternary to show conditional <p> IAW empty string or array
  const taskList = (
    <ul>
      {tasks !== "" || [] ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            taskItem={task}
            onToggle={props.onToggleCompleted}
          >
            {task.text}
          </TaskItem>
        ))
      ) : (
        <p className={classes.emptyList}>Your tasks will show here!</p>
      )}
    </ul>
  );

  return <MyCard className={classes.mycontainer}>{taskList}</MyCard>;
};

export default Tasks;
