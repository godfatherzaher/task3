import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import Home from './pages/Home/Home';
import SinglePropertyPage from './pages/SinglePropertyPage/SinglePropertyPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';


function App() {
  return (
    <>
    
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/properties" element={<PropertiesPage/> } /> 
          <Route path="/property-details" element={<SinglePropertyPage/>} /> 
          <Route path="/contact-us" element={<ContactUsPage/>} /> 
        </Route>
       </Routes>
      </Router>
    </>
  )
}

export default App
