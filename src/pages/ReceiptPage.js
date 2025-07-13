import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ReceiptPage() {
  const location = useLocation();
  const { paymentId, email, total } = location.state || {};

  return (
    <div className="container mt-5 text-center">
      <h2>🎉 Payment Successful!</h2>
      <p>✅ Thank you for your order at <strong>Jaspreet Cafe</strong></p>

      <div className="card mt-4 p-4">
        <p><strong>Payment ID:</strong> {paymentId}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Total Paid:</strong> ₹{total}</p>
      </div>

      <Link to="/" className="btn btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
}
