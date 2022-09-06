import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';

import { Empty } from './Empty';

import styles from './List.module.css';
import { Task } from './Task';

export function List() {
  const [tasks/*, setTasks*/] = useState(['']);

  return (
    <div className={styles.container}>
      <form className={styles.newTaskForm}>
        <input name="task" placeholder='Adicione uma nova tarefa' />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.toDoListHeader}>
        <div>
          <strong className={styles.createdTasks}>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong className={styles.finishedTasks}>Concluídas</strong>
          <span>0</span>
        </div>
      </div>
      {tasks.length === 0 ?
        <Empty /> :
        <Task />
      }
    </div>
  );
}