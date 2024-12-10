import React from 'react';
import AdainNavBar from '../components/navbar';
import Footer from './footer';
// I imported the navbar and footer to set them as my app structure but with a prop to control where they should show in the app.
const Layouts = ({ children, showNavbar, showFooter }) => {
  
   
  
  return (
    <div>

      {showNavbar && <AdainNavBar/>}
      {children}
      {showFooter && <Footer/>}
      
    </div>
  );
};

export default Layouts;