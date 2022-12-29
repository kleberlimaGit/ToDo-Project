import "./global.css";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css"
import { TodoMain } from "./components/TodoMain/TodoMain";

export function App() {
  return (
    <div>
      <Header />
      <TodoMain/>
    </div>
  );
}
