import type { Component } from 'solid-js';

import styles from './App.module.css';
import DogImagesContainer from '../chapters/7.presentational-container/DogImageContainer';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <DogImagesContainer />
    </div>
  );
};

export default App;
