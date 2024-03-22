import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginSignup = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/films'; 
    } else {
      loginWithPopup();
    }
  }, [isAuthenticated, loginWithPopup]);

  return (
    <div>
      <h1>Welcome to Film Archive</h1>
    </div>
  ); 
}
