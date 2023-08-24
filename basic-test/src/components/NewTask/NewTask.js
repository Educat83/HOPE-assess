import MyCard from "../UI/MyCard";
import NewTaskForm from "./NewTaskForm";

const NewTask = (props) => {
  const saveTaskHandler = async (taskText) => {
    // Substracting the last item id from local storage
    const taskLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    const taskLast = [...taskLocalStorage].pop();

    // Adding 1 to id value from last item of local storage array
    const genteredId = taskLast.id + 1;
    // New task values added to the new task
    const taskData = { id: genteredId, text: taskText, completed: false };
    // Data passed to through props to app.js
    props.onAddTask(taskData);
  };

  return (
    <MyCard>
      <NewTaskForm onSaveTask={saveTaskHandler} />
    </MyCard>
  );
};

export default NewTask;
