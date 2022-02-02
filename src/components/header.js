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
            <span style={{ color: 'black' }} className="back_arrow"><BackArrow /></span>
            <span>{currentYear}</span>
          </Link>
        </div>
        <div>
          <span>cases</span>
        </div>
        <div>
          <span><Mic /></span>
          <span><Gear /></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
