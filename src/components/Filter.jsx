import React, { useState, useContext, useEffect } from "react";
import TaskListContext from "../context/TaskListContext";

const Filter = () => {
  const [filterValue, setFilterValue] = useState("all");
  const { tasks, setFilteredTasks, clearList, isTaskAdded } =
    useContext(TaskListContext);

  useEffect(() => {
    switch (filterValue) {
      case "all":
        setFilteredTasks(tasks);
        break;
      case "done":
        const doneTasks = tasks.filter((task) => task.checked);
        setFilteredTasks(doneTasks);
        break;
      case "unfinished":
        const unfinishedTasks = tasks.filter((task) => !task.checked);
        setFilteredTasks(unfinishedTasks);
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }, [filterValue, tasks]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="flex justify-center mx-auto w-full gap-2 lg:gap-5 fixed bottom-14 bg-darkBody h-10 py-10 z-50 items-center">
      <p className="text-white text-sm lg:text-lg">Filter By:</p>
      <select
        value={filterValue}
        onChange={handleFilterChange}
        className="button-filter"
      >
        <option value="all">All</option>
        <option value="done">Completed</option>
        <option value="unfinished">Unfinished</option>
      </select>
      <button onClick={clearList} className="button-filter">
        Clear All
      </button>
    </div>
  );
};

export default Filter;
