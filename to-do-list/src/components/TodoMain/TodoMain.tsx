import styles from "./TodoMain.module.css";
import { PlusCircle } from "phosphor-react";
import { ListToDo } from "../ListToDo/ListToDo";
import { NotList } from "../NotList/NotList";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function TodoMain() {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConclude, setTaskConclude] = useState(0);
  const isNewTaskEmpty = newTask.length === 0;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setTaskCreated(tasks.length)
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })
    setTaskCreated(taskCreated - 1)
    setTasks(tasksWithoutDeletedOne);
  }

  function countMark(taskMark: boolean) {
    if(taskMark){
      setTaskConclude(taskConclude + 1)
    }else{
      setTaskConclude(taskConclude - 1)

    }
  }

  return (
    <main className={styles.container}>
      <form className={styles.formStyle} onSubmit={handleCreateNewComment}>
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTask}
          maxLength={145}
        />
        <button type="submit" className={styles.btnAdd} disabled={isNewTaskEmpty}>
          <p>Criar</p>
          <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.containerTaskConclude}>
        <div className={styles.taskCreated}>
          <strong>Tarefas criadas</strong>
          <span>{taskCreated}</span>
        </div>
        <div className={styles.taskConclude}>
          <strong>Concluídas</strong>
          <span>{`${taskConclude} de ${taskCreated}`}</span>
        </div>
      </div>
      {tasks.filter((task) => {
        return task !== "";
      }).length > 0 ? (
        tasks.filter((task) => {
          return task !== "";
        }).map((task) => {

          return (
            <ListToDo
              task={task}
              id={task}
              key={task}
              onDeleteTask = {deleteTask}
              onCountMark = {countMark}             
            />
          );
        })
      ) : (
        <NotList />
      )}
    </main>
  );
}
