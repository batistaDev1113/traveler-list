import { useState, useEffect } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import TasksList from "./components/TasksList";
import Stats from "./components/Stats";
import Filter from "./components/Filter";

import TaskListContext from "./context/TaskListContext";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("filteredTasks")) || []
  );
  const [filteredTasks, setFilteredTasks] = useState(
    JSON.parse(localStorage.getItem("filteredTasks")) || []
  );
  const [isTaskAdded, setIsTaskAdded] = useState(false);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    localStorage.setItem("filteredTasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  console.log(" is task added", isTaskAdded);
  const handleCheck = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Save tasks to localStorage whenever a new task is added
  useEffect(() => {
    if (isTaskAdded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setIsTaskAdded(false); // Reset isTaskAdded to false after saving tasks
    }
  }, [tasks, isTaskAdded]);

  // Save filteredTasks to localStorage whenever they are updated
  useEffect(() => {
    if (filteredTasks.length > 0) {
      localStorage.setItem("filteredTasks", JSON.stringify(filteredTasks));
    }
  }, [filteredTasks]);

  const clearList = () => {
    localStorage.removeItem("tasks");
    localStorage.removeItem("filteredTasks");
    setTasks([]);
    setFilteredTasks([]);
  };

  return (
    <TaskListContext.Provider
      value={{
        setTasks,
        deleteTask,
        handleCheck,
        filteredTasks,
        setFilteredTasks,
        clearList,
        tasks,
        isTaskAdded,
        setIsTaskAdded, // Pass setIsTaskAdded down through context
      }}
    >
      <div className="min-h-screen bg-darkBody">
        <Header />
        <FormInput />
        <TasksList />
        <Filter />
        <Stats />
      </div>
    </TaskListContext.Provider>
  );
}

export default App;
