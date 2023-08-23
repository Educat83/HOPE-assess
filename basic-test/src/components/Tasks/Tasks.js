import TaskItem from "./TaskItem";

const Tasks = (props) => {
  const taskList = props.items.map((task) => (
    <TaskItem key={task.id}>{task.text}</TaskItem>
  ));

  return (
    <ul>
      {taskList}
    </ul>
  )
};

export default Tasks;
