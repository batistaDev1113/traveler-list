import React, { useContext } from "react";
import TaskListContext from "../context/TaskListContext";
import Delete from "../assets/delete.svg";

const Task = ({ task }) => {
  const { deleteTask, handleCheck } = useContext(TaskListContext);
  return (
    <div className="flex justify-center place-content-center place-items-center gap-5 max-h-15  w-72 bg-yellowPrimary hover:bg-yellowPrimaryShade-light rounded-md columns-4 mb-5 p-2">
      <input
        type="checkbox"
        className="w-5 h-5 rounded-md accent-primary"
        checked={task.checked}
        onChange={() => handleCheck(task.id)}
      />
      <div
        className={`w-80 focus:outline-none tracking-wide ${
          task.checked ? "line-through decoration-2" : ""
        }`}
      >
        {task.quantity + "  " + task.taskToDo}
      </div>
      <div className=" rounded-md relative z-0">
        <img
          src={Delete}
          alt="Delete"
          className="w-10 hover:cursor-pointer place-self-center z-20"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
