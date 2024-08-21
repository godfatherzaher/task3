import React from 'react';
import styles from './Detail.module.css';

const Detail = ({ number, text }) => {
  return (
    <div className={styles.experienceBox}>
      <div className={styles.number}>{number}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.pin}></div>
    </div>
  );
};

export default Detail;
