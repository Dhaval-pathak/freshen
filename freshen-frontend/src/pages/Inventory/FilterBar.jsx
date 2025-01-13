import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center space-x-4">
      {filters.map((filter) => (
        <div key={filter.name}>
          <label className="block text-sm font-medium text-gray-700">
            {filter.label}
          </label>
          {filter.type === 'select' ? (
            <select
              name={filter.name}
              value={filter.value}
              onChange={(e) => onFilterChange(e.target.name, e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            >
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              name={filter.name}
              value={filter.value}
              onChange={(e) => onFilterChange(e.target.name, e.target.value)}
              placeholder={filter.placeholder}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
