// src/components/AuthForm.jsx
import React from 'react';

const AuthForm = ({ title, fields, buttonText, onSubmit }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">{title}</h2>
      <form className="space-y-4" onSubmit={onSubmit}>
        {fields.map((field, idx) => (
          <div key={idx}>
            <label className="block text-sm text-gray-600 mb-1" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={field.onChange}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
