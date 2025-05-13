import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      Home
    </NavLink>
    <NavLink
      to="/hotels"
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      Hotels
    </NavLink>
    <NavLink
      to="/booking"
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      Booking
    </NavLink>
    <NavLink
      to="/my-bookings"
      className={({ isActive }) => isActive ? 'active' : ''}
    >
      My Bookings
    </NavLink>
    <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
<NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Register</NavLink>

  </nav>
);

export default Navbar;
