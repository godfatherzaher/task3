
import './App.css'
import Header from './components/Header/Header'
import TopBar from './components/TopBar/TopBar'
import Slider from './components/Slider/Slider';
import Feature from './components/Feature/Feature';
import Video from './components/Video/Video';
import Details from './components/Details/Details';
import Deal from './components/Deal/Deal';
import Properties from './components/Properties/Properties';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';


function App() {

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
      <TopBar email="info@company.com"
         location="Sunny Isles Beach, FL 33160"
         facebook="https://www.facebook.com/"
         twitter="https://twitter.com/"
         linkedin="https://www.linkedin.com/"
         instagram="https://www.instagram.com"
      />
      <Header />
      <Slider slides={slides} />
      <Feature/>
      <Video/>
      <Details/>
      <Deal/>
      <Properties/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
