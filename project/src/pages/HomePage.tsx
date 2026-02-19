import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import Testimonials from '../components/home/Testimonials';
import Calculator from '../components/home/Calculator';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'C-Square | Premium Construction Services';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <ProjectsShowcase />
      <Testimonials />
      <Calculator />
      <CTA />
      <div className="text-center my-4">
        <Link to="/login" className="btn btn-outline-primary mx-2">Login</Link>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </div>
    </>
  );
};

export default HomePage;