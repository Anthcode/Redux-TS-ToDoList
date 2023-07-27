// src/taskSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: []
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }
  }
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
