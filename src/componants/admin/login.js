import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./admin.css";

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();



  return !isAuthenticated && (
    <div className='logincontener'>
      <h2>Admin page</h2>
      <p>Welcome News Box Admin </p>
      <button onClick={loginWithRedirect} className="logButton">Log in</button>
    </div>
  );
}

export default LoginButton;