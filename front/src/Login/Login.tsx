import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginCreate';

function Login() {
  return (
    <Routes>
        <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default Login