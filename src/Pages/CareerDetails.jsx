// src/pages/CareerDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import {careers} from "../data/data";
const CareerDetails = () => {
  const { careerId } = useParams();
  const career = careers.find((career) => career.id === parseInt(careerId));
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="bg-white rounded shadow-md p-4 w-1/2">
          <h2 className="text-lg font-bold">{career.name}</h2>
          <p className="text-gray-600">{career.description}</p>
          <p className="text-gray-600">Duration: {career.duration}</p>
          <p className="text-gray-600">Difficulty: {career.difficulty}</p>
          <p className="text-gray-600">Jobs: {career.jobs.join(", ")}</p>
          <p className="text-gray-600">Skills: {career.skills.join(", ")}</p>
          <p className="text-gray-600">Scope: {career.scope}</p>
          <p className="text-gray-600">Salary: {career.salary}</p>
          <p className="text-gray-600">Demand: {career.demand}</p>
          <p className="text-gray-600">
            Course Available: {career.courseAvailable ? "Yes" : "No"}
          </p>
          <p className="text-gray-600">
            Top Colleges: {career.topColleges.join(", ")}
          </p>
          <p className="text-gray-600">
            Career Scope: {career.careerScope.join(", ")}
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default CareerDetails;
