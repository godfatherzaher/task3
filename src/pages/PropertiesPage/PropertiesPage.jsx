

import HeroSection from '../../components/HeroSection/HeroSection'
import Properties from '../../components/Properties/Properties'

const PropertiesPage = () => {
  return (
    <>
        <HeroSection
            text="Home / properties"
            subText="properties"
        />
        <Properties
            showSubtitle={false}
            showFilter={true}
        />
    </>
  )
}

export default PropertiesPage