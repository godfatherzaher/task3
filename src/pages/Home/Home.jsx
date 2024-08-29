
import Slider from '../../components/Slider/Slider';
import Feature from '../../components/Feature/Feature';
import Video from '../../components/Video/Video';
import Details from '../../components/Details/Details';
import Deal from '../../components/Deal/Deal';
import Properties from '../../components/Properties/Properties';
import ContactUs from '../../components/ContactUs/ContactUs';





function Home() {

  const slides = [
    {
      image: '/assets/images/banner-01.jpg',
      location: 'Totomto,',
      city:'Camada',
      description: 'Hurry! Get the best villa for you',
    },
    {
      image: '/assets/images/banner-02.jpg',
      location: 'Rimimo,',
      city:'Lantor',
      description: 'Hurry! Get the best villa for you',
    },
    {
      image: '/assets/images/banner-03.jpg',
      location: 'Fomoflo,',
      city:'Tisara',
      description: 'Hurry! Get the best villa for you',
    },
  ];






  return (
    <>
      <Slider slides={slides} />
      <Feature/>
      <Video/>
      <Details/>
      <Deal/>
      <Properties showSubtitle={true}   showFilter={false}/>
      <ContactUs/>
    </>
  )
}

export default Home
