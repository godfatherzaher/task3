import Box from '../Box/Box';
import InfoSection from '../InfoSection/InfoSection';
import styles from './Properties.module.css';

const Properties = () => {

  const propertyDetails = [
    {
    Bedroom: '8',
    Bathroom: '8',
    Area: '545m2',
    Floor: '3',
    Parking: '6 spots'
  },
    {
    Bedroom: '6',
    Bathroom: '5',
    Area: '450m2',
    Floor: '3',
    Parking: '8 spots'
  },
    {
    Bedroom: '5',
    Bathroom: '4',
    Area: '225m2',
    Floor: '3',
    Parking: '10 spots'
  },
    {
    Bedroom: '4',
    Bathroom: '3',
    Area: '125m2',
    Floor: '25th',
    Parking: '2 cars'
  },
  {
    Bedroom: '4',
    Bathroom: '4',
    Area: '180m2',
    Floor: '38th',
    Parking: '2 cars'
  },
  {
    Bedroom: '3',
    Bathroom: '2',
    Area: '165m2',
    Floor: '26th',
    Parking: '3 cars'
  },
]





  return (
    <div className={styles.propertiesContainer}>
        <div className={styles.textBlock}>
            <p className={styles.singleWord}>
                <InfoSection
                subtitle="Properties"
                />
            </p>
           
            <h1 className={styles.fourWords}>We Provide The Best Property You Like</h1>
            <div className={styles.boxContainer}>
            <Box
                imageSrc="/assets/images/property-01.jpg"
                title="Luxury Villa"
                price="$2.264.000"
                location="18 New Street Miami, OR 97219"
                details={propertyDetails[0]}
                buttonIcon={false}
            />
            <Box
                imageSrc="/assets/images/property-02.jpg"
                title="Luxury Villa"
                price="$2.264.000"
                location="18 New Street Miami, OR 97219"
                details={propertyDetails[1]}
                buttonIcon={false}
            />
            <Box
                imageSrc="/assets/images/property-03.jpg"
                title="Luxury Villa"
                price="$2.264.000"
                location="18 New Street Miami, OR 97219"
                details={propertyDetails[1]}
                buttonIcon={false}
            />
            <Box
                imageSrc="/assets/images/property-04.jpg"
                title="Luxury Villa"
                price="$2.264.000"
                location="18 New Street Miami, OR 97219"
                details={propertyDetails[1]}
                buttonIcon={false}
            />
            <Box
                imageSrc="/assets/images/property-05.jpg"
                title="Luxury Villa"
                price="$2.264.000"
                location="18 New Street Miami, OR 97219"
                details={propertyDetails[1]}
                buttonIcon={false}
            />
            <Box
                imageSrc="/assets/images/property-06.jpg"
                title="Luxury Villa"
                price="$2.264.000"
                location="18 New Street Miami, OR 97219"
                details={propertyDetails[1]}
                buttonIcon={false}
            />
            </div>
            
          
      </div>
    </div>
  )
}

export default Properties