// src/pages/Admin.js
import React from 'react';
import Layout from '../Components/Layout';
import Sidebar from '../Components/Sidebar';
const Admin = () => {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <h2 className="text-lg font-bold">Admin Panel</h2>
          <p className="text-gray-600">Welcome to the admin panel</p>
        </div>
      </div>
    </Layout>
  );
};
export default Admin;
