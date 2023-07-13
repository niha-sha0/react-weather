import React from 'react';
import { WiDayLightWind } from 'react-icons/wi';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            
            <div className="weather-icon">
                <WiDayLightWind className="icon" />
                <h2 className="weather-text">Weather</h2>
            </div>

            <div className="navbar-items">
                {/*<h4 className="item">Dashboard</h4>
                <h4 className="item">Maps</h4>
                <h4 className="item">Calendar</h4>*/}
            </div>

            <div className="settings">
                <a className="github-link" href=""><BsGithub /></a>
                {/*<Link path="/" element={<BsGithub />} />*/}
            </div>
        </div>
    </>
  )
}

export default Navbar;