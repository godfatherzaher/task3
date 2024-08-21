
import React from 'react';
import styles from './InfoSection.module.css'; 
const InfoSection = ({ subtitle}) => {
  return (
   <>

      <h4 className={styles.infoSubtitle}>
         {subtitle}
         
      </h4>
      
      
   </>
    
   
  );
}

export default InfoSection;
