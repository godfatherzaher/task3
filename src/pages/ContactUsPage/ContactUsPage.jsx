
import FormMeesage from '../../components/FormMeesage/FormMeesage';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import styles from './ContactUsPage.module.css';

const ContactUsPage = () => {
  return (
    <>
        <HeroSection
         text="Home / Contact Us"
         subText="Contact Us" />

        <div className={styles.container}>
            <div className={styles.firstContent}> 
                <div className={styles.mainText}>
                    <div className={styles.text}>
                            <div className={styles.header}><InfoSection subtitle="ContactUs"/></div>
                            <h1 className={styles.featureTitle}>Get in touch with our agents</h1>
                            <p>When you really need to download free CSS template, please remember 
                                our website templateMo. Also, tell your friends about our website. 
                                Thank you for visiting. There is a variety of Booststrap HTML CSS template
                                on our website. If you need more information,please contact us.
                            </p>    
                    </div>

                    <div className={styles.details}>
                    <div className={`${styles.detailsPhone} ${styles.one}`}>
                    <img src="/assets/images/phone-icon.png" className={styles.phoneIcon} alt="Phone Icon" />
                    <div className={styles.phoneNumber}>
                        <p >010-202-0340</p>
                        <span>phone number</span>
                    </div>
                    </div>
                    <div className={`${styles.detailsPhone} ${styles.two}`}>
                        <img src="/assets/images/email-icon.png" className={styles.emailIcon} alt="Phone Icon" />
                        <div className={styles.emailNumber}>
                        <p >010-202-0340</p>
                        <span>phone number</span>
                    </div>
                    </div>
                    </div>
            
                </div>


                <div className={styles.form}>
                    <FormMeesage/>
                </div>

            </div>
            
            <div className={styles.map}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.05388861538!2d-80.14561678532172!3d25.939107693381555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1724261874819!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='map' >
                        
                </iframe>
            </div>

         </div>
    </>
  )
}

export default ContactUsPage