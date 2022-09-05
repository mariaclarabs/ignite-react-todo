import { PlusCircle } from 'phosphor-react';
import { Header } from './Header';

import styles from './List.module.css';

export function List() {
  return (
    <div className={styles.container}>
      <form className={styles.newTaskForm}>
        <input name="task" placeholder='Adicione uma nova tarefa' />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}