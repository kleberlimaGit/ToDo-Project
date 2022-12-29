import { Trash } from 'phosphor-react'
import styles from './ListToDo.module.css'
import { ChangeEvent, useState } from 'react';
import { List } from '../Types/Types';

export function ListToDo({id, description}: List) {

  const [toDo, setToDo] = useState(false);

   function handleMarkListDone(event : ChangeEvent<HTMLInputElement>){
      setToDo(event.target.checked)
  }

  return (
    <div className = {styles.container}>
      <div className={styles.round}>
        <input type="checkbox" id={`checkbox${id}`} onChange={handleMarkListDone}/>
        <label htmlFor={`checkbox${id}`}></label>
      </div>
      <p className={toDo === true ? styles.listDone : ''}>{description}</p>
      <Trash className={styles.trash} size={22}/>
    </div>
  );
}

/*165 */