import React, { useState, useEffect, useContext } from "react";
import TaskListContext from "../context/TaskListContext";

const Stats = () => {
  const { tasks } = useContext(TaskListContext);
  const [percentage, setPercentage] = useState(0);

  const calculatePercentage = () => {
    const totalTasks = tasks.length || 0;
    const completedTasks = tasks.filter((task) => task.checked).length;
    const newPercentage = Math.round((completedTasks / totalTasks) * 100);
    setPercentage(newPercentage);
  };

  useEffect(() => {
    if (tasks.length > 0) {
      calculatePercentage();
    }
  }, [tasks]);

  return (
    <footer className="bg-greenPrimaryShade-dark w-full h-14 flex items-center justify-center transition-all ease-in-out bottom-0 fixed py-0">
      <div className="text-center text-xs lg:text-2xl text-secondary-100 w-4/5 py-10 mx-auto">
        <p className="text-center">
          {tasks.length}
          {tasks.length === 0 || tasks.length > 1 ? " tasks" : " task"} have
          been added! You are{" "}
          <span className="text-green-400">{percentage}%</span> done!
        </p>
      </div>
    </footer>
  );
};

export default Stats;
