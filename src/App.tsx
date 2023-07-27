import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}
