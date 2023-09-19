import React from "react";
import {
  PiXBold,
  PiRectangleBold,
  PiStopBold,
  PiCheckSquareBold,
} from "react-icons/pi";

export default function Task({ todoList, completedTask, deleteTask }) {
  return (
    <div>
      {todoList.map((task, index) => (
        <div className="text-slate-300 flex justify-between my-1" key={index}>
          <div className="pl-3">
            <p
              className={`${
                task.completed ? "text-gray-500 line-through" : "text-white"
              } text-white`}
            >
              {task.nameTask}
            </p>
          </div>
          <div className="space-x-3 pr-3 flex items-center">
            <button onClick={() => completedTask(task.id)}>
              {task.completed ? <PiCheckSquareBold /> : <PiStopBold />}
            </button>
            <button onClick={() => deleteTask(task.id)} className="text-white">
              <PiXBold />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
