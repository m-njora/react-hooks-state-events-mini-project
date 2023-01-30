import React , { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedId, setSelectedId] = useState("All")
  const [Tasks, setTasks] = useState(TASKS);
  const handleSelect = (item) => {
    let updatedTask = Tasks.filter(i => i.category === item || item === "All")
    setSelectedId(() => item)
    setTasks(() => updatedTask)
  }
  const onTaskFormSubmit = (item) => {
    setTasks((Tasks) => [...Tasks, item])
  }
  const onDelete = (id) => {
    const updatedTasks = Tasks.filter((_, i) => i !== id)
    setTasks(() => updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
      <CategoryFilter categories={CATEGORIES} selectedId={selectedId} handleSelect={handleSelect} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList selectedId={selectedId} tasks={Tasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
