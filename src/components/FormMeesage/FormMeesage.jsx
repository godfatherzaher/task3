
import Button from '../Button/Button'
import styles from './FormMeesage.module.css';


const FormMeesage = () => {
  return (
    <form className={styles.container}>
        <div className={styles.formGroup}>
        
        <label className={styles.label} htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Your Name..." className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Your E-mail..." className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="Subject..." className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your message..." className={styles.textareaField}></textarea>
        </div>
        <Button showIcon={false}/>
</form>
  )
}

export default FormMeesage