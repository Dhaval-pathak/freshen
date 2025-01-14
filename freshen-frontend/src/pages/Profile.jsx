// src/pages/Profile.jsx
import React, { useEffect, useState } from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import { fetchProfile } from '../api/authApi';
import Footer from '../components/Footer';
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please log in.');
        return;
      }
      try {
        const data = await fetchProfile(token);
        setUser(data.user);
      } catch (error) {
        alert('Failed to load profile: ' + error.response?.data.message);
      }
    };
    loadProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Navbar */}
      { <HeaderNavbar />}

      {/* Profile Content */}
      <div className="flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          {user ? (
            <>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Profile</h2>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
              <p className="text-sm text-gray-600">Role: {user.role}</p>
            </>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Profile;
