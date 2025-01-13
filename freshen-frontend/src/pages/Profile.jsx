// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../api/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please log in.');
        navigate('/login');
        return;
      }
      try {
        const data = await fetchProfile(token);
        setUser(data.user);
      } catch (error) {
        alert('Failed to load profile: ' + error.response?.data.message);
        navigate('/login');
      }
    };
    loadProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to Login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Profile</h2>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Role: {user.role}</p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
