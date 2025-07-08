import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const FloatingCart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div 
      className="floating-cart"
      onClick={() => navigate('/cart')}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#dc3545',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <div style={{ position: 'relative' }}>
        <FaShoppingCart size={24} />
        {itemCount > 0 && (
          <span 
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              backgroundColor: '#ffc107',
              color: '#000',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {itemCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default FloatingCart;
