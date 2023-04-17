import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
    <div className="links">
      <NavLink to="/" className="images-link nav-links">Collections</NavLink>
      <NavLink to="/photos" className="likes-link nav-links">Photos</NavLink>
    </div>
);

export default Navbar;
