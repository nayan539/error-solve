import React from 'react';
import { careers } from '../data/careers';
const CareerList = () => {
  return (
    <div>
      {careers.map((career) => (
        <div key={career.id}>{career.name}</div>
      ))}
    </div>
  );
};
export default CareerList;
