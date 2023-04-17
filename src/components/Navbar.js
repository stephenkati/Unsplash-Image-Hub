import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
    <div className="links">
      <NavLink to="/" className="images-link nav-links">Images</NavLink>
      <NavLink to="/likes" className="likes-link nav-links">Likes</NavLink>
    </div>
);

export default Navbar;
