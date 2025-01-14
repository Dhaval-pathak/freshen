// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { registerUser, loginUser } from '../api/authApi';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      alert('Registration successful! Logging you in...');
      const { token } = await loginUser(email, password); // Auto-login after registration
      localStorage.setItem('token', token); // Save token to localStorage
      navigate('/profile'); // Redirect to Profile page
    } catch (error) {
      alert('Registration failed: ' + error.response?.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm
        title="Register"
        fields={[
          { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email', onChange: (e) => setEmail(e.target.value) },
          { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password', onChange: (e) => setPassword(e.target.value) },
        ]}
        buttonText="Register"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
