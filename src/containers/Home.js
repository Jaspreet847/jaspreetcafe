import React from 'react';
import Desert from '../landingpages/Desert';
import Lunch from '../landingpages/Lunch';
import BreakFast from '../landingpages/BreakFast';
import Dinner from '../landingpages/Dinner';
import BookTable from '../components/BookTable';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <style>
        {`
          .hero-section {
           background-image: url("/images/155.png");

            background-size: cover;
            background-position: center;
            height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .hero-text {
           
            border-radius: 16px;
            color: #fff;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            font-family: 'Georgia', serif;
          }

          .hero-text p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-style: italic;
          }
        `}
      </style>

      

      <section className="hero-section">
        <div className="hero-text">
          <h1>Jaspreet Cafe</h1>
          <p>Food is always a good idea</p>
          <BookTable />
        </div>
      </section>

      <Desert />
      <BreakFast />
      <Lunch />
      <Dinner />

    </div>
  );
}
