import { Header } from './components/Header';
import { List } from './components/List';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <List />
      </div>
    </>
  );
}

export default App
