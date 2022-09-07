import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";

import styles from './Task.module.css';

type TaskProps = {
  id: string;
  text: string;
  done: boolean;
  onCheckTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Task({ id, text, done, onCheckTask }: TaskProps) {
  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    onCheckTask(event);
  }

  return (
    <div className={styles.task}>
      <div>
        <input type='checkbox' id={id} onChange={handleCheckTask} />
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
