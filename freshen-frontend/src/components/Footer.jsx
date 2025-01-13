import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-blue-500 text-white p-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Company Name or Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Freshen</h2>
          <p className="text-sm">© 2025 Freshen, All Rights Reserved</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6">
          <button
            onClick={() => navigate('/crm')}
            className="hover:underline focus:outline-none"
          >
            CRM
          </button>
          <button
            onClick={() => navigate('/sales')}
            className="hover:underline focus:outline-none"
          >
            Sales
          </button>
          <button
            onClick={() => navigate('/products')}
            className="hover:underline focus:outline-none"
          >
            Products
          </button>
          <button
            onClick={() => navigate('/expenses')}
            className="hover:underline focus:outline-none"
          >
            Expenses
          </button>
          <button
            onClick={() => navigate('/customers')}
            className="hover:underline focus:outline-none"
          >
            Customers
          </button>
        </div>

        {/* Social Media or Contact */}
        <div className="text-center md:text-right">
          <p className="text-sm">Follow us:</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H7v4H3v4h4v8h4v-8h4l1-4h-5V9c0-1.105.895-2 2-2h3V3h-4c-2.761 0-5 2.239-5 5v3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.827 9.827 0 0 1-2.828.775A4.931 4.931 0 0 0 23.337 3a9.865 9.865 0 0 1-3.127 1.195 4.925 4.925 0 0 0-8.384 4.482A13.986 13.986 0 0 1 1.671 3.149 4.925 4.925 0 0 0 3.15 9.605a4.904 4.904 0 0 1-2.229-.616v.061a4.927 4.927 0 0 0 3.946 4.829 4.902 4.902 0 0 1-2.224.085 4.927 4.927 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 20.342 13.951 13.951 0 0 0 7.548 22c9.142 0 14.307-7.721 14.307-14.42 0-.219-.005-.438-.015-.657A10.315 10.315 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zM12 0c-3.259 0-3.667.012-4.947.07-1.274.058-2.637.335-3.676 1.374-1.038 1.038-1.315 2.401-1.374 3.676C2.012 8.333 2 8.741 2 12c0 3.259.012 3.667.07 4.947.058 1.274.335 2.637 1.374 3.676 1.038 1.038 2.401 1.315 3.676 1.374C8.333 21.988 8.741 22 12 22c3.259 0 3.667-.012 4.947-.07 1.274-.058 2.637-.335 3.676-1.374 1.038-1.038 1.315-2.401 1.374-3.676.058-1.28.07-1.688.07-4.947 0-3.259-.012-3.667-.07-4.947-.058-1.274-.335-2.637-1.374-3.676-1.038-1.038-2.401-1.315-3.676-1.374C15.667 2.012 15.259 2 12 2zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16.162a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
