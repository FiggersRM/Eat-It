import React from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Login() {
  return (
    <div className="loginCont">
        <LoginForm />
        <SignupForm />
    </div>
  )
}

export default Login