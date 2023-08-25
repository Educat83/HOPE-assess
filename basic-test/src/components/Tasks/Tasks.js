import TaskItem from "./TaskItem";
import MyCard from "../UI/MyCard";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  // Let variable assing to alt text for empty list of tasks
  let taskList = (
    <p className={classes.emptyList}>Your tasks will show here!</p>
  );

  // When the return of the props object lenght doesn't equal zero then return
  // a map of the tasks
  if (Object.values(props.items).length !== 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem
            key={task.id}
            taskItem={task}
            onToggle={props.onToggleCompleted}
            onRemove={props.onRemoveTask}
            onUpdate={props.onUpdateTask}
          >
            {task.text}
          </TaskItem>
        ))}
      </ul>
    );
  }

  return <MyCard className={classes.mycontainer}>{taskList}</MyCard>;
};

export default Tasks;
