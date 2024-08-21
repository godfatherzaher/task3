
import styles from './Header.module.css';
import { FaCalendar , FaBars  } from "react-icons/fa";
import { useState } from 'react';
import Button from '../Button/Button';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <a href="/" aria-label="Homepage">VILLA</a>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`} aria-label="Main navigation">
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/property-details">Property Details</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
         </ul>
        <Button/>
      </nav>
      
      <div className={`${styles.hamburger} ${!isMenuOpen ? styles.del : ''}`}   onClick={toggleMenu}>
                <FaBars />
      </div>
    </header>
  )
}

export default Header

