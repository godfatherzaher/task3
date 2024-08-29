import React, { useState } from 'react';
import styles from './Deal.module.css';
import InfoSection from '../InfoSection/InfoSection';
import DealDetail from '../DealDetail/DealDetail'; 

const Deal = () => {
  const [selectedDeal, setSelectedDeal] = useState('Appartment');

  const deals = {
    'Appartment': {
      space: '185 m2',
      floor: '26th',
      rooms: '4',
      parking: 'Yes',
      payment: 'Bank',
      imageSrc: '/assets/images/deal-01.jpg',
      extraInfoTitle: 'Extra Info About Appartment',
      extraInfoTextOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. do eiumod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse',
      extraInfoTextTwo: 'When you need free CSS templates you can simply typeTemplateMo in any search engine website. in addition, you can type Templateo Protfolio, TemplateMo One page Layouts,ets.',
    },
    'Villa House': {
      space: '250 m2',
      floor: '26nd',
      rooms: '5',
      parking: 'Yes',
      payment: 'Bank',
      imageSrc: '/assets/images/deal-02.jpg',
      extraInfoTitle: 'Detail Info About Villa ',
      extraInfoTextOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. do eiumod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse',
      extraInfoTextTwo: 'Swag fanny pack lyft blog twee JOMO rthical copper mug, succulents typewriter shaman DIY kitsch twee taikaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.',
    },
    'Penthouse': {
      space: '320 m2',
      floor: '34th',
      rooms: '6',
      parking: 'Yes',
      payment: 'Bank',
      imageSrc: '/assets/images/deal-03.jpg', 
      extraInfoTitle: 'Extra Info About Penthouse',
      extraInfoTextOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. do eiumod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse',
      extraInfoTextTwo: 'Swag fanny pack lyft blog twee JOMO rthical copper mug, succulents typewriter shaman DIY kitsch twee taikaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.',
    }
  };

  
  return (
    <div className={styles.dealContainer}>
      <div className={styles.textBlock} id="property-details">
        <p className={styles.singleWord}>
          <InfoSection subtitle="Dest Deal" />
        </p>
        <h1 className={styles.fourWords}>Find your best deal right now!</h1>
      </div>

      <div className={styles.rectanglesContainer}>
        {Object.keys(deals).map((dealType) => (
          <button 
            key={dealType}
            className={`${styles.rectangle} ${selectedDeal === dealType ? styles.selected : ''}`}
            onClick={() => setSelectedDeal(dealType)}
            
          >
            {dealType}
          </button>
        ))}
      </div>

      <DealDetail {...deals[selectedDeal]} />

      
    </div>
  );
};

export default Deal;
