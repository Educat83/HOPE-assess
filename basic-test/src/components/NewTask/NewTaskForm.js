import classes from './NewTaskForm.module.css';

const NewTaskForm = () => {
  return (
    <form className={classes.form}>
      <input type="text" />
      <button>Add Task</button>
    </form>
  );
};

export default NewTaskForm;
