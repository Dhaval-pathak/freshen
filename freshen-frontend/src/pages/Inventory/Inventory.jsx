import React, { useState } from 'react';
import AddProduct from './AddProduct';
import AddCategory from './ProductCategoryPage';
import InventoryDashboard from './InventoryDashboard';
import HeaderNavbar from '../../components/HeaderNavbar';
const Inventory = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div > <HeaderNavbar />
    <div className="flex h-screen">
     
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-4">Inventory</h2>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li
              className={`p-4 cursor-pointer hover:bg-blue-600 ${
                activeTab === 'dashboard' ? 'bg-blue-600' : ''
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </li>
            <li
              className={`p-4 cursor-pointer hover:bg-blue-600 ${
                activeTab === 'addProduct' ? 'bg-blue-600' : ''
              }`}
              onClick={() => setActiveTab('addProduct')}
            >
              Add Product
            </li>
            <li
              className={`p-4 cursor-pointer hover:bg-blue-600 ${
                activeTab === 'addCategory' ? 'bg-blue-600' : ''
              }`}
              onClick={() => setActiveTab('addCategory')}
            >
              Add Category
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-100">
        {activeTab === 'dashboard' && <InventoryDashboard />}
        {activeTab === 'addProduct' && <AddProduct />}
        {activeTab === 'addCategory' && <AddCategory />}
      </div>
    </div>
    </div>
  );
};

export default Inventory;
