import FeatureList from "../FeatureList/FeatureList";
import styles from "./SingleProperty.module.css"

const SingleProperty = () => {


    const featureData = [
        {
          iconSrc: '/assets/images/info-icon-01.png',
          iconAlt: 'Flat Space',
          measurement: '250 m2',
          text: 'Total Flat space'
        },
        {
          iconSrc: '/assets/images/info-icon-02.png',
          iconAlt: 'Contract Ready',
          measurement: 'Contract',
          text: 'Contract Ready'
        },
        {
          iconSrc: '/assets/images/info-icon-03.png',
          iconAlt: 'Payment',
          measurement: 'Payment',
          text: 'Payment',
          iconText: 'Process'
        },
        {
          iconSrc: '/assets/images/info-icon-04.png',
          iconAlt: 'Safety',
          measurement: 'Safety',
          text: '24/7 Under',
          iconText: 'Control'
        }
      ];

    return (
        <div className={styles.singlePropertyContainer}>

          <div className={styles.singlePropertyHead}>
              <div className={styles.featureImageWrapper}>
               <img src="/assets/images/property-01.jpg" alt="Feature Image" className={styles.singlePropertyImage} />
              </div>
            
              <div className={styles.singlePropertyFeature}><FeatureList features={featureData} /></div>
          </div>

          <div className={styles.singlePropertyContentOne}>

            <div className={styles.details}>
                <p className={styles.type} >Apparment</p>
                <h1 className={styles.location} >24 New Street Miami, OR 24560</h1>
            </div>
          </div>

          <div className={styles.singlePropertyContentTwo}>
              <p className={styles.singlePropertyFirstDescription}>
              Get <span className={styles.highlightOne}>the best villa </span>HTML, CSS, and Bootstrap 
              for your company website. TemplateMo provides you the <span className={styles.highlightTwo}>best free CSS templates </span>
              in the world. Please tell your friends about it.Thank you Cloud break kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schitz enamel pin you propbably haven't heard of them ugh hella
              </p>
              <p className={styles.singlePropertySecondDescription}>When you look for free CSS template, you simply type templateMo in any search 
                  engine website. In addition. you can type TemplateMO Digital marketing. TemplateMo Corporate Layouts. etc. Master cardigan hoodie pop-up
              </p>
              <div className={styles.singlePropertyThirdDescription}>
                    <h4 className={styles.singlePropertySubheading}>Best useful links?</h4>
                  <p className={styles.singlePropertyDescription}>
                    Dolor <span className={styles.highlightThree}>almesit amet </span>
                    consectetue adicipiscing elit, sed doesn't eiumsmod tempor kinfolk tonx 
                    seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice,
                    chollwave vexillologist incidiunt ut labore consectetur 
                    <span className={styles.highlightFour}> adipiscing </span>
                    elit, sed do eiusmod tempor icididunt ut labore et dolore manga aliqua
                  </p>
                  <p className={styles.singlePropertyQuestionOne}>How does this work?</p>
                  <p className={styles.singlePropertyQuestionTwo}>Why is Villa Agency the best?</p>
                </div>
          </div>


          
          
        </div>
      );
} 

export default SingleProperty