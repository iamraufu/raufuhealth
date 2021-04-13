import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
      return (
            <div className='header-container'>
                  <Navbar/>
                  <HeaderMain/>
                  <BusinessInfo/>
            </div>
      );
};

export default Header;