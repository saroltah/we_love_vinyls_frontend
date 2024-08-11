import React from 'react';
import styles from '../styles/NotExist.module.css';
import { useHistory } from 'react-router-dom';

function NotExist() {
  const history = useHistory();

  return (
    <div>
      <h1 className={styles.h1}> This page does not exist</h1>
      <button
        className={styles.Button}
        onClick={() => history.push('/')}
      >
        Back to homepage
      </button>
    </div>
  );
}

export default NotExist;
