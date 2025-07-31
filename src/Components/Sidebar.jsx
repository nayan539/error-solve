// src/components/Sidebar.js
import React from 'react';
const Sidebar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <ul>
        <li className="mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Add Career
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Edit Career
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Add College
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            View All Reviews
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Add News/Update
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
        