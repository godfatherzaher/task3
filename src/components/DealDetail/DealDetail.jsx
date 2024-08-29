
import React from 'react';
import styles from './DealDetail.module.css';
import Button from '../Button/Button';

const DealDetail = ({ space, floor, rooms, parking, payment, imageSrc, extraInfoTitle, extraInfoTextOne, extraInfoTextTwo }) => {
  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableParent}>
          <p>Total flate space</p>
          <div className={styles.size}>{space}</div>
        </div>
        <div className={styles.tableParent}>
          <p>Floor number</p>
          <div className={styles.size}>{floor}</div>
        </div>
        <div className={styles.tableParent}>
          <p>Number of rooms</p>
          <div className={styles.size}>{rooms}</div>
        </div>
        <div className={styles.tableParent}>
          <p>Parking Available</p>
          <div className={styles.size}>{parking}</div>
        </div>
        <div className={styles.tableParent}>
          <p>Payment Process</p>
          <div className={styles.size}>{payment}</div>
        </div>
      </div>


      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Deal Image" className={styles.image} />
      </div>


      <div className={styles.textContainer}>
        <h4>{extraInfoTitle}</h4>
        <p className={styles.textOne}>{extraInfoTextOne}</p>
        <p className={styles.textTwo}>{extraInfoTextTwo}</p>
        <button className={styles.button}>
        <Button />
      </button>
      </div>
     
    </>
  );
};

export default DealDetail;
