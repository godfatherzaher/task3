import styles from './Button.module.css';
import { FaCalendar } from "react-icons/fa";

const Button = ({ showIcon = true, ...props }) => {
  return (
    <button className={`${styles.scheduleBtn} ${!showIcon ? styles.noIcon : ''}`}>
           {showIcon && <span className={styles.iconContainer}>
              <FaCalendar className={styles.CalendarIcon} />
            </span>}
            <span className={styles.text}>
              Schedule a visit
            </span>
      </button>
  )
}

export default Button