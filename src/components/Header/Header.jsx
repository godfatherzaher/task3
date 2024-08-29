
import styles from './Header.module.css';
import { FaCalendar , FaBars  } from "react-icons/fa";
import { useState } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';



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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/property-details">Property Details</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
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

