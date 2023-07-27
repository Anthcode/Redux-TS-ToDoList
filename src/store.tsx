// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

// Definiujemy typ całego stanu aplikacji, który będzie składał się z różnych sliców (reduktorów).
export interface RootState {
  tasks: ReturnType<typeof taskReducer>;
}

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
});

export default store;
