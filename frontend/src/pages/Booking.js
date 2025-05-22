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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/accounts/book/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", // ✅ Required for session authentication
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Booking saved to database!");
        navigate("/booking/confirmed", { state: formData });
      } else {
        alert(data.error || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("❌ An error occurred. Please try again.");
    }
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
