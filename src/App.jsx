// src/App.js
import React from 'react';
import Layout from './Components/Layout';
import { CareerList } from './Components/CareerList';
import ReviewList from './Components/ReviewList';
import About from './Pages/About';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <Layout>
      <CareerList />
      <ReviewList />
      <About />
      <Contact />
    </Layout>
  );
};
export default App;
