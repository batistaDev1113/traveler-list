import React, { useContext, useEffect, useState } from "react";
import TaskListContext from "../context/TaskListContext";
import Filter from "./Filter";
import Task from "./Task";

const TasksList = () => {
  const { filteredTasks, tasks } = useContext(TaskListContext);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (tasks.length > 0 && filteredTasks.length === 0) {
      setErrorMessage("No tasks match your filter!");
    } else if (tasks.length === 0) {
      setErrorMessage("No tasks have been added yet!");
    } else {
      setErrorMessage("");
    }
  }, [tasks, filteredTasks]);

  return (
    <div className="p-7 xl:p-14 mx-auto flex flex-wrap lg:gap-5 justify-center gap-3 mb-96">
      {/* <Filter /> */}
      {errorMessage ? (
        <div className="text-center text-sm lg:text-3xl text-secondary-100 w-full py-10 mx-auto text-white">
          <p className="text-center">{errorMessage}</p>
        </div>
      ) : (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TasksList;
