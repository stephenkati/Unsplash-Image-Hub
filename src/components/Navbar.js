import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

const Navbar = () => (
    <div className="links">
      <NavLink to="/">
        <IoIosArrowBack className="nav-links" />
      </NavLink>
      <NavLink to="/" className="images-link nav-links">Collections</NavLink>
      <div>
        <FaMicrophone className="nav-links" />
        <IoIosSettings className="nav-links" />
      </div>
    </div>
);

export default Navbar;
