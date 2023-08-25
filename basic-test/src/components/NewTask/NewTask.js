import MyCard from "../UI/MyCard";
import NewTaskForm from "./NewTaskForm";

const NewTask = (props) => {
  const saveTaskHandler = async (taskText) => {
    // ID generator, simplyfied to generate random identifyer
    const genteredId =
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
      ).toString(36);
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
