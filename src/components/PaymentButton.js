import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PaymentButton({ items, userEmail, onSuccess }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handlePay = async () => {
    try {
      const { data: order } = await axios.post('http://localhost:5000/api/cart/create-order', {
        amount: total,
      });

      console.log("🧾 Razorpay Order Created:", order);

      const options = {
        key: 'rzp_test_y4w0fpWH1AqajN', // ✅ Your Razorpay test key
        amount: order.amount,
        currency: 'INR',
        name: 'Jaspreet Cafe',
        description: 'Cafe Order Payment',
        order_id: order.id,
        handler: async function (response) {
          console.log("✅ Razorpay Payment Success:", response);

          await axios.post('http://localhost:5000/api/cart/checkout', {
            userEmail,
            items,
          });

          alert('✅ Payment successful! Invoice sent.');

          onSuccess && onSuccess();

          // 👇 Navigate to receipt page
          navigate('/receipt', {
            state: {
              paymentId: response.razorpay_payment_id,
              email: userEmail,
              total,
            },
          });
        },
        prefill: {
          name: 'Customer',
          email: userEmail,
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: function () {
            console.log("❌ Razorpay popup dismissed");
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("❌ Payment Failed Error:", error);
      alert('❌ Payment failed. Please try again.');
    }
  };

  return (
    <button className="btn btn-success" onClick={handlePay}>
      Pay ₹{total}
    </button>
  );
}
