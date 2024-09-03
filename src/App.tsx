import "./App.css";
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import { useReducer } from "react";
import taskReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/context/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/context/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, authDispatch }}>
      <TasksContext.Provider value={{ tasks, tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
