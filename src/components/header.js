import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSettings as Gear } from 'react-icons/io';
import { BsFillMicFill as Mic } from 'react-icons/bs';
import { MdKeyboardArrowLeft as BackArrow } from 'react-icons/md';
import './header.css';

const Header = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <header>
      <div className="header_container">
        <div className="year_header">
          <Link to="/">
            <span style={{ color: 'white', fontSize: '110%', fontWeight: 'bold' }} className="back_arrow"><BackArrow /></span>
            <span className="current_year">{currentYear}</span>
          </Link>
        </div>
        <div>
          <span style={{ fontSize: '110%', fontWeight: '500' }}>cases</span>
        </div>
        <div>
          <span style={{ fontSize: '120%', fontWeight: '500' }}><Mic /></span>
          {' '}
          <span style={{ fontSize: '120%', fontWeight: '500' }}><Gear /></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
