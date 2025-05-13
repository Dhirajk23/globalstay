import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BookingConfirmed = () => {
  const location = useLocation();
  const data = location.state || {};

  return (
<div className="container" style={{ textAlign: 'center' }}>


      <h1>🎉 Booking Confirmed!</h1>
      <p>Thank you, <strong>{data.name || "Guest"}</strong>!</p>
      <p>
        Your <strong>{data.roomType || "room"}</strong> is booked from <strong>{data.checkIn}</strong> to <strong>{data.checkOut}</strong>.
      </p>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default BookingConfirmed;
