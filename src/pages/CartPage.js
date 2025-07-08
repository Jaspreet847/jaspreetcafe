import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [email, setEmail] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      await axios.post('http://localhost:5000/api/cart/checkout', {
        userEmail: email,
        items: cart
      });
      alert('✅ Invoice sent to your email!');
      clearCart();
    } catch (err) {
      console.error(err);
      alert('❌ Checkout failed');
    }
  };

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

          <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}
