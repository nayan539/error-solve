// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';
const Home = () => {
  return (
    <Layout>
      <div className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Choose Your Path</h1>
          <p className="text-lg text-white">Select your education level</p>
          <div className="flex justify-center space-x-4">
            <Link to="/career-list/10th" className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
              10th Pass
            </Link>
            <Link to="/career-list/12th" className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
              12th Pass
            </Link>
            <Link to="/career-list/graduate" className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
              Graduate
            </Link>
            <Link to="/career-list/dropout" className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
              Dropout/Job Seeker
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
