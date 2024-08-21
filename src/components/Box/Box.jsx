import Button from '../Button/Button';
import styles from './Box.module.css';

const Box = ({ imageSrc, title, price, location, details, buttonIcon }) => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.imagContainer}>
          <img src={imageSrc} alt="Property Image" />
      </div>
      <div className={styles.price}>
          <p>{title}</p>
          <h3>{price}</h3>
      </div>
      <h1 className={styles.location}>
          {location}
      </h1>
      <div className={styles.details}>
          {Object.entries(details).map(([label, value]) => (
            <p key={label}>{label}: <span>{value}</span></p>
          ))}
      </div>
      
      <div className={styles.button}>
        <Button showIcon={buttonIcon} />
      </div>
    </div>
  );
}

export default Box;
