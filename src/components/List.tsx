import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 } from 'uuid';

import { Empty } from './Empty';

import styles from './List.module.css';
import { Task } from './Task';

type TaskItem = {
  id: string;
  text: string;
  createdAt: Date;
  done: boolean;
}

export function List() {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: v4(),
      text: newTaskText,
      createdAt: new Date(),
      done: false,
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function checkTask(event: ChangeEvent<HTMLInputElement>) {
    setTasks(oldTasks => oldTasks.map(task => {
      if (task.id === event.target.id)
        return { ...task, done: event.target.checked };
      return task;
    }));
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={styles.container}>
      <form className={styles.newTaskForm} onSubmit={handleCreateTask}>
        <input 
          name="task"
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit"
          disabled={isNewTaskEmpty}
        >
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
        <>
          {tasks.map(task => (
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              onCheckTask={checkTask}
            />
          ))}
        </>
      }
    </div>
  );
}