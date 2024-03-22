import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link bileşeni eklenmiştir.
import './login.css';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginSignup = () => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();

  // Kullanıcı girişi durumu değiştiğinde otomatik yönlendirme yapılacak.
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/films';
    }
  }, [isAuthenticated]);

  return (
    <div className='login_main'>
      <ul>
        <li><button onClick={loginWithPopup}>Login with redirect</button></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
      <h3>User is {isAuthenticated ? "logged in " : "not logged in"}</h3>
      {/* isAuthenticated true ise '/films' sayfasına, değilse '/login' sayfasına yönlendirir. */}
      {isAuthenticated ? (
        <Link to="/films">Go to Films</Link>
      ) : (
        <Link to="/">Go to Login</Link>
      )}
    </div>
  );
}
