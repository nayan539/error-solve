import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import CareerCard from '../Components/CareerCard';
import careers from '../data/careers';
const CareerList = () => {
  const { educationLevel } = useParams();
  const [careerList, setCareerList] = useState([]);
  useEffect(() => {
    const filteredCareers = careers.filter((career) => {
      if (educationLevel === '10th') {
        return career.name.includes('10th');
      } else if (educationLevel === '12th') {
        return career.name.includes('12th');
      } else if (educationLevel === 'graduate') {
        return career.name.includes('Graduate');
      } else {
        return career.name.includes('Dropout');
      }
    });
    setCareerList(filteredCareers);
  }, [educationLevel]);
  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        {careerList.map((career) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
    </Layout>
  );
};
export default CareerList;
