import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import PaymentButton from '../components/PaymentButton';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [email, setEmail] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, idx) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                <button onClick={() => removeFromCart(item.name)} className="btn btn-sm btn-danger">Remove</button>
              </li>
            ))}
          </ul>
          <p className="mt-3"><strong>Total: ₹{total}</strong></p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            className="form-control mb-2"
            onChange={e => setEmail(e.target.value)}
          />

          <PaymentButton
            items={cart}
            userEmail={email}
            onSuccess={clearCart}
          />
        </>
      )}
    </div>
  );
}
