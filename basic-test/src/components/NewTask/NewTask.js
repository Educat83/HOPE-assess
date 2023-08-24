import MyCard from "../UI/MyCard";
import NewTaskForm from "./NewTaskForm";

const NewTask = (props) => {
  const saveTaskHandler = async (taskText) => {
    // ID generator, validating a empty local storage at first
    let lastStoredTask = '';
    // Substracting the last item id from local storage
    const taskLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    // Ternary to def first id to zero if empty local storage
    taskLocalStorage === ""
      ? (lastStoredTask = { id: 0 })
      // When to empty array then exctrat last object of the array
      : (lastStoredTask = [...taskLocalStorage].pop());

    // Adding 1 to id value from last item of local storage array
    const genteredId = lastStoredTask.id + 1;
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
