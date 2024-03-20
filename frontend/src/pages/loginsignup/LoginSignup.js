import React from 'react'
import './LoginSignup.css'

// import user from './assets/person.png'
// import email from './assets/email.png'
// import password from './assets/password.png'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginSignup = () => {

  const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated } =useAuth0()
  return (
    <div className='login_main'>
  <ul>
      <li><button onClick={loginWithPopup}>Login with popup</button></li>
      <li><button onClick={loginWithRedirect}>Login with redirect</button></li>
      <li><button onClick={logout}>Logout</button></li>
    </ul>
    <h3>User is {isAuthenticated? "loged in " : "not logged in"}</h3>
    </div>
  
  )
}
