import "./global.css";
import { Header } from "./Header/Header";
import { ListToDo } from "./ListToDo/ListToDo";
import { TodoMain } from "./TodoMain/TodoMain";
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <TodoMain/>
      </div>
    </div>
  );
}
