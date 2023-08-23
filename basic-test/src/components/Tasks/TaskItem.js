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
    text: 'Get a job as Reac dev'
  }
];

const TaskItem = () => {
  const taskList = DUMMY_tasks.map((task) => (
    <li>{task.text}</li>
  ));

  return (
    <ul>
      {taskList}
    </ul>
  )
};

export default TaskItem;
