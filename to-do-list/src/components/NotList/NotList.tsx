import styles from "./NotList.module.css";
import ClipBoard from "../../assets/ClipBoard.svg";
export function NotList() {
  return (
    <div className={styles.div}>
      <img src={ClipBoard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie Tarefas e organize seus itens a fazer</p>
    </div>
  );
}
