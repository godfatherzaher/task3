import { MdEmail } from "react-icons/md";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaLinkedin,FaInstagram ,FaTwitter,FaMap} from "react-icons/fa";
import styles from "./TopBar.module.css"


const TopBar = ({email,facebook,location,twitter,linkedin,instagram}) => {
  return (
    <div className={styles.topBar}>
      <div  className={styles.contactInfo} >
        <div className={styles.email}>
          <MdEmail   className={styles.emailIcon} />
          <a href={`mailto:${email}`}>{email}</a> 
        </div>    
        <div className={styles.location}>
          <FaMap  className={styles.locationIcon}/>
          <span>{location}</span>
        </div>    
    
      </div>
      <div className={styles.socialConnect} >
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <BiLogoFacebookCircle />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
          </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        
      </div>
    </div>
  )
}

export default TopBar