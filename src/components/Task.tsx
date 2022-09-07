import { Trash } from "phosphor-react";

import styles from './Task.module.css';

type TaskItem = {
  id: string;
  text: string;
  createdAt: Date;
  done: boolean;
}

export function Task({ id, text, done }: TaskItem) {
  return (
    <div className={styles.task}>
      <div>
        <input type='checkbox' id={id} />
        <label htmlFor={id} />
      </div>
      <span className={done ? styles.finishedTask : ''}>
        {text}
      </span>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  );
}
