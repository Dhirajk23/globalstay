import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Must be here at top level

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/hotels" className={({ isActive }) => isActive ? 'active' : ''}>Hotels</NavLink>
      <NavLink to="/booking" className={({ isActive }) => isActive ? 'active' : ''}>Booking</NavLink>
      <NavLink to="/my-bookings" className={({ isActive }) => isActive ? 'active' : ''}>My Bookings</NavLink>

      {user ? (
        <div className="navbar-user">
  <span className="navbar-welcome">Welcome, {user.email}</span>
  <button onClick={handleLogout} className="logout-button">Logout</button>
</div>

      ) : (
        <>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Register</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
