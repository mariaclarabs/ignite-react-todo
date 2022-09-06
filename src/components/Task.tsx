import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <div>
        <input type='checkbox' id='checkbox' />
        <label htmlFor='checkbox' />
      </div>
      <span className={styles.finishedTask}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </span>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  );
}
