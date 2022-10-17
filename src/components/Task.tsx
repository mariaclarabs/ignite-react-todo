import { Checkbox } from "@mui/material";
import { Circle, Trash } from "phosphor-react";
import { ChangeEvent } from "react";

import CheckedIcon from '../assets/checked.svg';

import styles from './Task.module.css';

type TaskProps = {
  id: string;
  text: string;
  done: boolean;
  onCheckTask: (event: ChangeEvent<HTMLInputElement>) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, text, done, onCheckTask, onDeleteTask }: TaskProps) {
  function handleCheckTask(event: ChangeEvent<HTMLInputElement>) {
    onCheckTask(event);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <Checkbox
        id={id}
        icon={<Circle size={18} />}
        checkedIcon={<img src={CheckedIcon} />}
        onChange={handleCheckTask}
      />
      <span className={done ? styles.finishedTask : ''}>
        {text}
      </span>
      <button onClick={handleDeleteTask}>
        <Trash size={20}/>
      </button>
    </div>
  );
}
