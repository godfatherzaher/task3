import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const updateSlide = () => {
      const sliderContent = document.querySelector(`.${styles.sliderContent}`);
      if (sliderContent) {
        const img = sliderContent.querySelector('img');
        const location = sliderContent.querySelector('p');
        const city = sliderContent.querySelector('span');
        const description = sliderContent.querySelector('h1');

        if (img) img.src = slides[currentSlide].image;
        if (location) location.textContent = slides[currentSlide].location;
        if (city) city.textContent = slides[currentSlide].city;
        if (description) description.textContent = slides[currentSlide].description;
      }
    };

    updateSlide();
  }, [currentSlide, slides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderContent}>
        <img src="" alt="slide" className={styles.image} />
        <div className={styles.textContainer}>
          <div>
            <p></p>
            <span></span>
          </div>
          <h1></h1>
        </div>
      </div>
      <div className={styles.arrowLeft} onClick={prevSlide}>
        <FaChevronLeft />
      </div>
      <div className={styles.arrowRight} onClick={nextSlide}>
        <FaChevronRight />
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
