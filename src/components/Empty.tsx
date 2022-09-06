import clipboardImg from '../assets/clipboard.svg';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboardImg} alt="Clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
