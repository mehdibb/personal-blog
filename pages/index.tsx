import React from 'react';
import styles from './index.module.scss';

export default function Home(): React.ReactElement {
  return (
    <main className={`${styles.main} container d-flex justify-content-center align-items-center`}>
      <h1>React/Next/Bootstrap</h1>
    </main>
  );
}
