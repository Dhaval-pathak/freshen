import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProfile } from '../api/authApi';
const HeaderNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [email, setUser] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const data = await fetchProfile(token);
        console.log(token)
        setUser(data.user.email);
      } catch (error) {
        localStorage.removeItem('token');
      }
    };
    loadProfile();
  }, []);

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const menuItems = [
    {
      text: 'Inventory',
      path: '/inventory',
      gradient: 'bg-gradient-to-r from-purple-600 to-blue-500',
      icon: '📦',
    }, { text: 'Sales', path: '/sales', gradient: 'bg-gradient-to-r from-pink-500 to-red-500', icon: '🛒' },
    { text: 'CRM', path: '/crm', gradient: 'bg-gradient-to-r from-yellow-400 to-orange-400', icon: '📋' },
    { text: 'Customers', path: '/customers', gradient: 'bg-gradient-to-r from-green-400 to-lime-500', icon: '👤' },
    { text: 'Expenses', path: '/expenses', gradient: 'bg-gradient-to-r from-blue-800 to-indigo-900', icon: '💳' },
    { text: 'Products', path: '/products', gradient: 'bg-gradient-to-r from-orange-400 to-red-500', icon: '📦' },
    { text: 'Reports', path: '/reports', gradient: 'bg-gradient-to-r from-pink-400 to-pink-600', icon: '📊' },
    { text: 'Settings', path: '/settings', gradient: 'bg-gradient-to-r from-gray-800 to-gray-900', icon: '⚙️' },
    { text: 'Developer', path: '/developer', gradient: 'bg-gradient-to-r from-blue-400 to-blue-500', icon: '🔗' },
    { text: 'Forms', path: '/forms', gradient: 'bg-gradient-to-r from-orange-500 to-yellow-500', icon: '✏️' },
    { text: 'About', path: '/about', gradient: 'bg-gradient-to-r from-purple-500 to-purple-700', icon: 'ℹ️' },
  ];

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate('/profile')}
        >
          Freshen
        </h1>

        {/* Navbar Items */}
        <div className="flex items-center space-x-6">
          {/* Dropdown Button */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Functionality
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-lg z-10 p-4"
                style={{ overflow: 'hidden' }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center cursor-pointer rounded-lg text-white ${item.gradient} h-20 w-20 hover:opacity-90 transition`}
                      onClick={() => {
                        navigate(item.path);
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <span className="text-sm mt-2">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Profile Icon */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full text-white font-bold">
              {email ? email.charAt(0).toUpperCase() : 'U'}
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavbar;
