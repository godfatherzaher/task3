import Button from '../Button/Button';
import styles from './Map.module.css';

const Map = () => {
  return (
    <>
    <div className={styles.videoContainer}>
     
     <div className={styles.title}>
       <h4 className={styles.subtitle}><span>|</span> Contact us</h4>
       <h1 className={styles.titleText}>Get in touch with our agents</h1>
       <img src="/assets/images/mapImage.png" className={styles.frameImage} alt="" />
       <form className={styles.contactForm}>
           <div className={styles.formGroup}>
           
             <label className={styles.label} htmlFor="name">Your Name</label>
             <input type="text" id="name" placeholder="Your name..." className={styles.inputField} />
           </div>
           <div className={styles.formGroup}>
             <label className={styles.label} htmlFor="email">Your Email</label>
             <input type="email" id="email" placeholder="Your email..." className={styles.inputField} />
           </div>
           <div className={styles.formGroup}>
             <label className={styles.label} htmlFor="subject">Subject</label>
             <input type="text" id="subject" placeholder="Your subject..." className={styles.inputField} />
           </div>
           <div className={styles.formGroup}>
             <label className={styles.label} htmlFor="message">Message</label>
             <textarea id="message" placeholder="Your message..." className={styles.textareaField}></textarea>
           </div>
           <Button showIcon={false}/>
      </form>
     
     </div>
    
   </div>
  <div className={styles.parentDetails}>
      <div className={`${styles.contactDetails} ${styles.one}`}>
        <img src="/assets/images/phone-icon.png" className={styles.phoneIcon} alt="Phone Icon" />
        <p className={styles.phoneNumber}>010-202-0340</p>
      </div>
     <div className={`${styles.contactDetails} ${styles.two}`}>
        <img src="/assets/images/phone-icon.png" className={styles.phoneIcon} alt="Phone Icon" />
        <p className={styles.phoneNumber}>010-202-0340</p>
      </div>
  </div>
    </>
    
  );
};

export default Map;
