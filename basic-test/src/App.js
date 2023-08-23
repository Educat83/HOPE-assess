import "./App.css";
import Tasks from "../src/components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

const DUMMY_tasks = [
  {
    id: "t1",
    text: "Supermarket shop",
  },
  {
    id: "t2",
    text: "Batch cook for the week",
  },
  {
    id: "t3",
    text: "Learn React with a full belly",
  },
  {
    id: "t4",
    text: "Get a job as React dev",
  },
];

function App() {
  return (
    <>
      <NewTask />
      <Tasks items={DUMMY_tasks} />
    </>
  );
}

export default App;
