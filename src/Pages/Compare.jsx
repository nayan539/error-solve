// src/pages/Compare.js
import React from 'react';
import Layout from '../Components/Layout';
const Compare = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="bg-white rounded shadow-md p-4 w-1/2">
          <h2 className="text-lg font-bold">Compare Careers</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b border-gray-200 py-2">Career</th>
                <th className="border-b border-gray-200 py-2">Duration</th>
                <th className="border-b border-gray-200 py-2">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 py-2">B.Com</td>
                <td className="border-b border-gray-200 py-2">3 years</td>
                <td className="border-b border-gray-200 py-2">Medium</td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 py-2">BBA</td>
                <td className="border-b border-gray-200 py-2">3 years</td>
                <td className="border-b border-gray-200 py-2">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
export default Compare;
