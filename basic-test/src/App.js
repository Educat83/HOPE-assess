import "./App.css";
import Tasks from "../src/components/Tasks/Tasks";

const DUMMY_tasks = [
  {
    id: "t1",
    text: "Supermarket shop",
  },
  {
    id: 't2',
    text: 'Batch cook for the week'
  },
  {
    id: 't3',
    text: 'Learn React with a full belly'
  },
  {
    id: 't4',
    text: 'Get a job as React dev'
  }
];

function App() {

  return (
    <>
      <Tasks items={DUMMY_tasks}/>
    </>
  );
}

export default App;
