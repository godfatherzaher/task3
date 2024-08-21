import React from 'react';
import styles from './Deal.module.css';
import InfoSection from '../InfoSection/InfoSection';
import Button from '../Button/Button';

const Deal = () => {
  return (
    <div className={styles.dealContainer}>
    
      <div className={styles.textBlock}>
        <p className={styles.singleWord}>
            <InfoSection
            subtitle="Dest Deal"
            />
        </p>
        <h1 className={styles.fourWords}>find your best deal right now!</h1>
      </div>

    
      <div className={styles.rectanglesContainer}>
        <div className={styles.rectangle}>Appartment</div>
        <div className={styles.rectangle}>Villa House </div>
        <div className={styles.rectangle}>Penthouse</div>
      </div>

     
      <div className={styles.tableContainer}>
        <div className={styles.tableParent}>
            <p>Total flate space</p>
            <div className={styles.size}>185 m2</div>
        </div>
        <div className={styles.tableParent}>
            <p>Floor number</p>
            <div className={styles.size}>26th</div>
        </div>
        <div className={styles.tableParent}>
            <p>Number of rooms</p>
            <div className={styles.size}>4</div>
        </div>
        <div className={styles.tableParent}>
            <p>Parking Available</p>
            <div className={styles.size}>Yes</div>
        </div>
        <div className={styles.tableParent}>
            <p>Payment Process</p>
            <div className={styles.size}>Bank</div>
        </div>
      </div>

    
      <div className={styles.imageContainer}>
        <img src="/assets/images/property-05.jpg" alt="Deal Image" className={styles.image} />
      </div>


      <div className={styles.textContainer}>
        <h4>Extra Info About Property</h4>
        <p className={styles.textOne}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. do eiumod tempor pack incididunt ut labore et dolore magna 
            aliqua quised ipsum suspendisse
         </p>
        <p className={styles.textTwo}>When you need free CSS templates you can simply typeTemplateMo in any search engine website. in addition, you can type Templateo 
            Protfolio, TemplateMo One page Layouts,ets.
         </p>
        <button className={styles.button}>
          <Button/>
        </button>
      </div>
    </div>
  );
};

export default Deal;
