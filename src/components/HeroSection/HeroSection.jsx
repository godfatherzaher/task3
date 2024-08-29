
import React from 'react';
import styles from './HeroSection.module.css'; 


const HeroSection = ({ text, subText }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <p className={styles.heroText}>{text}</p>
        <h1  className={styles.subText}>{subText}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
