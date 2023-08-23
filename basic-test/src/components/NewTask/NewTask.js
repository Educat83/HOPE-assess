import MyCard from "../UI/MyCard";

const NewTask = () => {
  return (<MyCard>
    <form>
      <label>Add a new task</label>
      <input type="text"></input>
    </form>
  </MyCard>)
};

export default NewTask;
