import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopBar from '../TopBar/TopBar';
import Header from '../Header/Header';

const Layout = () => {
    return (
      <div>
        <TopBar email="info@company.com"
         location="Sunny Isles Beach, FL 33160"
         facebook="https://www.facebook.com/"
         twitter="https://twitter.com/"
         linkedin="https://www.linkedin.com/"
         instagram="https://www.instagram.com"
      />
       <Header/>
        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;