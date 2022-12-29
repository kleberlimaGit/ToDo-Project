import "./global.css";
import { Header } from "./Header/Header";
import { ListToDo } from "./ListToDo/ListToDo";
import { TodoMain } from "./TodoMain/TodoMain";

export function App() {
  return (
    <div>
      <Header />
      <TodoMain/>
    </div>
  );
}
