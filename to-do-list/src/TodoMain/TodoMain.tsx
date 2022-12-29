import styles from "./TodoMain.module.css";
import { PlusCircle } from "phosphor-react";
import { ListToDo } from "../ListToDo/ListToDo";
import { NotList } from "../NotList/NotList";
import { List } from "../Types/Types";

export function TodoMain() {
  let tasks:List[] = [
    {
      id: '1',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad.",
    },
    {
      id: '2',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad.",
    },
  ];

  return (
    <main className={styles.container}>
      <form className={styles.formStyle}>
        <input
          type="text"
          name="texto"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.btnAdd}>
          <p>Criar</p>
          <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.containerTaskConclude}>
        <div className={styles.taskCreated}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.taskConclude}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <ListToDo
              description={task.description}
              id={task.id}
              key={task.id}
            />
          );
        })
      ) : (
        <NotList />
      )}
    </main>
  );
}
