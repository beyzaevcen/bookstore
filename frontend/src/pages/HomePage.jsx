import React from 'react';
import { Link } from 'react-router-dom'; // Link componentini import ediyoruz

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="animated-text">Welcome to your film diary</h1>
        <div className="log-buttons">
          <Link to="/login" className="button-56" id="login-button">
            Login
          </Link>
      
        </div>
      </div>
    </div>
  );
}
