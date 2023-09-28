import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import { UserData } from '../globalContext';

function Login() {
  const { login } = UserData();
  if (login === true) return <Navigate to="/"/>
  return (
    <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />}/>
    </Routes>
  )
}

export default Login