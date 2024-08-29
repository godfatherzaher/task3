import React from 'react';
import styles from './Feature.module.css';
import InfoSection from '../InfoSection/InfoSection';
import FeatureList from '../FeatureList/FeatureList';

const Feature = () => {

  const featureData = [
    {
      iconSrc: '/assets/images/info-icon-01.png',
      iconAlt: 'Flat Space',
      measurement: '250 m2',
      text: 'Total Flat space'
    },
    {
      iconSrc: '/assets/images/info-icon-02.png',
      iconAlt: 'Contract Ready',
      measurement: 'Contract',
      text: 'Contract Ready'
    },
    {
      iconSrc: '/assets/images/info-icon-03.png',
      iconAlt: 'Payment',
      measurement: 'Payment',
      text: 'Payment',
      iconText: 'Process'
    },
    {
      iconSrc: '/assets/images/info-icon-04.png',
      iconAlt: 'Safety',
      measurement: 'Safety',
      text: '24/7 Under',
      iconText: 'Control'
    }
  ];



  return (
    
    <div className={styles.featureContainer}>
      <div className={styles.featureImageWrapper}>
         <img src="/assets/images/featured.jpg" alt="Feature Image" className={styles.featureImage} />
         <div className={styles.featureIcon}>
         <img src="/assets/images/featured-icon.png"  alt="Feature Icon"  />
         </div>
      </div>
      <div className={styles.featureContent}>
       <InfoSection
        subtitle="Featured"
       />
       <h1 className={styles.featureTitle}>Best Apartment & Sea View</h1>
        <h4 className={styles.featureSubheading}>Best useful links?</h4>
        <p className={styles.featureDescription}>
          Get <span className={styles.highlightOne}>the best villa </span>website template in HTML, CSS, and Bootstrap 
          for your business. TemplateMo provides you the <span className={styles.highlightTwo}>best free CSS templates </span>
          in the world. Please tell your friends about it.
        </p>
        <p className={styles.featureQuestionOne}>How does this work?</p>
        <p className={styles.featureQuestionTwo}>Why is Villa Agency the best?</p>
      </div>
      <FeatureList features={featureData} />
      
    </div>
  );
}

export default Feature;
