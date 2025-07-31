// src/components/CareerCard.js
import React from 'react';
import data from '../data/data';
const careers = data.careers;
const CareerCard = ({ career }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <h2 className="text-lg font-bold">{career.name}</h2>
      <p className="text-gray-600">{career.description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Details
      </button>
    </div>
  );
};
export default CareerCard;
