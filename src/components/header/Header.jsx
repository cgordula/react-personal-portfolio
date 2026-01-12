import React from 'react';
import './header.css';
import CallToAction from './CallToAction';
import ME from '../../assets/prof-pic.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Carmina Gordula</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <CallToAction />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#footer" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
