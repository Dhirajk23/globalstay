import React, { useEffect, useState } from 'react';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  return (
    <div className="container">

      <h1>📋 My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <strong>{booking.name}</strong> booked a <strong>{booking.roomType}</strong> room from <strong>{booking.checkIn}</strong> to <strong>{booking.checkOut}</strong>.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
