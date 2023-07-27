// src/TodoList.js
import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./taskSlice";
import { RootState } from "./store";

function TodoList(): React.ReactElement {
  const [taskName, setTaskName] = useState<string>("");

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), name: taskName }));
    setTaskName("");
  };

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input type="text" value={taskName} onChange={handleChange} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
