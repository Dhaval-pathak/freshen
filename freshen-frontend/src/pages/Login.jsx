// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { loginUser } from '../api/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(email, password);
      localStorage.setItem('token', token); // Save token to localStorage
      navigate('/profile'); // Redirect to Profile page
    } catch (error) {
      alert('Login failed: ' + error.response?.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm
        title="Login"
        fields={[
          { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email', onChange: (e) => setEmail(e.target.value) },
          { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password', onChange: (e) => setPassword(e.target.value) },
        ]}
        buttonText="Login"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
