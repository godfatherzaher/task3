import React from 'react';
import styles from './Feature.module.css';
import InfoSection from '../InfoSection/InfoSection';

const Feature = () => {
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
      <div className={styles.featureList}>
        <ul >
            <li className={styles.featureListItem}>
                <div className={styles.featureItemIcon}>
                  <img src="/assets/images/info-icon-01.png" alt="" />
                </div>
                <div className={styles.featureDetails}>
                   <h4 className={styles.featureMeasurement}>250 m2</h4>
                  <span className={styles.featureText}>Total Flat space</span>
                </div>
            </li>
            <li className={styles.featureListItem}>
                <div className={styles.featureItemIcon}>
                  <img src="/assets/images/info-icon-02.png" alt="" />
                </div>
                <div className={styles.featureDetails}>
                    <h4 className={styles.featureMeasurement}>Contract</h4>
                   <span className={styles.featureText}>Contract Ready</span>
                </div>
                
            </li>
            <li className={styles.featureListItem}>
                 <div className={styles.featureItemIcon}>
                  <img src="/assets/images/info-icon-03.png" alt="" />
                  <span>Process</span>
                 </div>
                 <div className={styles.featureDetails}>
                     <h4 className={styles.featureMeasurement}>Payment</h4>
                     <span className={styles.featureText}>Payment</span>
                 </div>
                
            </li>
            <li className={styles.featureListItem}>
                 <div className={styles.featureItemIcon}>
                  <img src="/assets/images/info-icon-04.png" alt="" />
                  <span>Control</span>
                 </div>
                 <div className={styles.featureDetails}>
                   <h4  className={styles.featureMeasurement}>Safety</h4>
                   <span className={styles.featureText}>24/7 Under</span>
                 </div>
                
            </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Feature;
