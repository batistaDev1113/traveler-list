import React, { useState, useContext } from "react";
import TaskListContext from "../context/TaskListContext";

const FormInput = () => {
  const { tasks, setTasks, setIsTaskAdded } = useContext(TaskListContext);
  const [quantity, setQuantity] = useState("");
  const [taskToDo, setTaskToDo] = useState("");
  const [error, setError] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();
    if (quantity === "" || taskToDo === "") {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      quantity,
      taskToDo,
      checked: false,
    };
    setQuantity("");
    setTaskToDo("");
    setIsTaskAdded(true); // Set isTaskAdded to true when a new task is added
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="sticky top-0 h-44 lg:h-52" id="outer-form-container">
      <form
        className="flex h-44 lg:h-52 w-full items-center justify-center gap-2 px-2 bg-darkBody/25 z-50 relative"
        onSubmit={submitTask}
      >
        <input
          type="number"
          min={1}
          placeholder="#"
          className="w-20 h-10 rounded-md focus:outline-none p-2 z-50 relative"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Task to do"
          className="w-80 h-10 rounded-md p-5 focus:outline-none"
          value={taskToDo}
          onChange={(e) => setTaskToDo(e.target.value)}
        />
        <button
          type="submit"
          className="w-40 h-10 rounded-md bg-greenPrimary hover:bg-greenPrimaryShade-light hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-greenPrimaryShade-dark focus:ring-opacity-50"
        >
          Add
        </button>
      </form>

      {error ? (
        <p className="text-red-500 text-lg w-full flex justify-center">
          All fields are required!
        </p>
      ) : null}
    </div>
  );
};

export default FormInput;
