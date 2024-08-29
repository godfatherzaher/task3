import React from 'react';
import styles from './FeatureList.module.css'; 

const FeatureList = ({ features }) => {
  return (
    <div className={styles.featureList}>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureListItem}>
            <div className={styles.featureItemIcon}>
              <img src={feature.iconSrc} alt={feature.iconAlt} />
              {feature.iconText && <span>{feature.iconText}</span>}
            </div>
            <div className={styles.featureDetails}>
              <h4 className={styles.featureMeasurement}>{feature.measurement}</h4>
              <span className={styles.featureText}>{feature.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;