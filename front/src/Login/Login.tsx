import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';

function Login() {
  return (
    <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />}/>
    </Routes>
  )
}

export default Login