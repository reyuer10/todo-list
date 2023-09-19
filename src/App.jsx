import { useState } from "react";
import Task from "./Task";
import { PiPlusBold } from "react-icons/pi";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      nameTask: newTask,
      completed: false,
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="flex h-screen justify-center items-center text-white font-poppins text-2xl">
      <div className="bg-slate-700 p-3 rounded-2xl shadow-lg shadow-slate-500">
        <div className="flex space-x-2">
          <input
            type="text"
            className="text-black rounded-lg border-box px-3"
            placeholder="Enter to do..."
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button className="flex items-center text-xl bg-slate-500 rounded-lg px-2 shadow-lg" onClick={() => addTask()}><PiPlusBold
          
           size={17} />Add </button>
        </div>
        <div>
          <Task
            todoList={todoList}
            completedTask={completedTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}
