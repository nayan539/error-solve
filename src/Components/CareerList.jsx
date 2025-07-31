import React, { useState } from 'react';
import { careers } from '../data/career';
const CareerList = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const handleCareerClick = (career) => {
    setSelectedCareer(career);
  };
  return (
    <div>
      {careers.map((career) => (
        <div key={career.id}>
          <button onClick={() => handleCareerClick(career)}>
            {career.name}
          </button>
        </div>
      ))}
      {selectedCareer && (
        <div>
          <h2>{selectedCareer.name}</h2>
          <p>{selectedCareer.description}</p>
          <p>Education Level: {selectedCareer.educationLevel}</p>
        </div>
      )}
    </div>
  );
};
export default CareerList;
