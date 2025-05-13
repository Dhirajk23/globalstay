import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const existing = JSON.parse(localStorage.getItem('bookings')) || [];
  const updated = [...existing, formData];
  localStorage.setItem('bookings', JSON.stringify(updated));

  navigate("/booking/confirmed", { state: formData });
};

  

  return (
    <div className="container">

      <h1>Book a Room</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

        <label>Check-in Date:</label>
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required /><br />

        <label>Check-out Date:</label>
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required /><br />

        <label>Room Type:</label>
        <select name="roomType" value={formData.roomType} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Deluxe">Deluxe</option>
        </select><br /><br />

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
