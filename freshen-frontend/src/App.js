// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Inventory from './pages/Inventory/Inventory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/inventory" element={<Inventory/>} />

      </Routes>
    </Router>
  );
}

export default App;


// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/crm" element={<div>CRM Page</div>} />
//         <Route path="/sales" element={<div>Sales Page</div>} />
//         <Route path="/products" element={<div>Products Page</div>} />
//         <Route path="/expenses" element={<div>Expenses Page</div>} />
//         <Route path="/customers" element={<div>Customers Page</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
