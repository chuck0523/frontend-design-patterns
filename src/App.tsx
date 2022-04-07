import type { Component } from 'solid-js';

import styles from './App.module.css';
import { CounterProvider, ChildCounter } from '../chapters/5.provider/provider';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <CounterProvider count={1}>
        <ChildCounter />
      </CounterProvider>
    </div>
  );
};

export default App;
