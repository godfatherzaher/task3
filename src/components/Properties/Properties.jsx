import Box from '../Box/Box';
import InfoSection from '../InfoSection/InfoSection';
import styles from './Properties.module.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React, { useState } from 'react'
import properties from '../../data/propertiesData';
const Properties = ({ showSubtitle,showFilter }) => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

 


  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    
    
  };

  const filteredProperties = properties.filter(property => {
    if (selectedCategory === 'all') return true;
    return property.title.toLowerCase() === selectedCategory.toLowerCase();
  });
  
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return filteredProperties.slice(0, 9).map((property, index) => (
          <Box
            key={index}
            imageSrc={property.imageSrc}
            title={property.title}
            price={property.price}
            location={property.location}
            details={property.details}
            buttonIcon={false}
          />
        ));
      case 2:
        return filteredProperties.slice(9, 11).map((property, index) => (
          <Box
            key={index}
            imageSrc={property.imageSrc}
            title={property.title}
            price={property.price}
            location={property.location}
            details={property.details}
            buttonIcon={false}
          />
        ));
     
      default:
        return null;
    }
  };







  return (
    <div className={styles.propertiesContainer} id="properties">
      <div className={styles.textBlock}>
        { showSubtitle  && ( <p className={styles.singleWord}>
          <InfoSection subtitle="Properties" />
        </p>    )}
        { showSubtitle && ( <h1 className={styles.fourWords}>We Provide The Best Property You Like</h1>)}
         { showFilter && <div className={styles.rectanglesContainer}>
            <button 
                className={`${styles.rectangle} ${selectedCategory === 'all' ? styles.active : ''}`}
                 onClick={() => handleFilterClick('all')}
             >
             show all
            </button>
            <button 
                  className={`${styles.rectangle} ${selectedCategory === 'Apartment' ? styles.active : ''}`}
                  onClick={() => handleFilterClick('Apartment')}
            > 
              Apartment
            </button>
            <button 
                      className={`${styles.rectangle} ${selectedCategory === 'Luxury Villa' ? styles.active : ''}`} 
                      onClick={() => handleFilterClick('Luxury Villa')}
            > 
              Villad House
             </button>
            <button 
                        className={`${styles.rectangle} ${selectedCategory === 'Penthouse' ? styles.active : ''}`}
                        onClick={() => handleFilterClick('Penthouse')}
            >
               Penthouse
             </button>
          </div>}
        
        <div className={styles.boxContainer}>
         {renderPageContent()}
        </div>

  
       { showFilter && <div className={styles.navigationContainer}>

        <div className={styles.dotsContainer}>
          <button 
              className={`${styles.circleButton} ${currentPage == 1 ?styles.active:"" } `} 
              onClick={() => handlePageChange(1)}
           >
            1
          </button>
          <button 
                  className={`${styles.circleButton} ${currentPage == 2 ?styles.active:"" } `} 
                  onClick={() => handlePageChange(2)}
            >
            2
            </button>
          <button 
               className={`${styles.circleButton} ${currentPage == 3 ?styles.active:"" } `} 
               onClick={() => handlePageChange(3)}
          >
            3
          </button>
        </div>
        <button className={styles.arrowButton}><MdKeyboardDoubleArrowRight /></button>
      </div>}


      </div>
    </div>
  );
};

export default Properties;