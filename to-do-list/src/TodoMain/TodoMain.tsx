import styles from './TodoMain.module.css'
import { PlusCircle } from "phosphor-react";
import { ListToDo } from "../ListToDo/ListToDo";

export function TodoMain() {
let taks = [
  {
    id:1,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad."

  }, 
  {
    id:2,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad adipisicing elit. as das dasdasdsa asdasdas. asdasd asd asdsad."
  }
]



  return (
    <div className={styles.container}>
      <form className={styles.formStyle}>
        <input type="text" name="texto" placeholder='Adicione uma nova tarefa'/>
        <button type="submit" className={styles.btnAdd}>
          <p>Criar</p><PlusCircle size={20}/>
        </button>
        

      </form>
      {taks.map((task) => {
        return (
          <ListToDo
            description={task.description}
            id={task.id}
            key={task.id}
          />
        )
      })}
    </div>
  );
}
