import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70 z-0"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 min-h-[90vh] flex flex-col justify-center pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-primary-600 rounded-lg mb-6 animate-fade-in">
            <p className="text-sm font-semibold">Trusted Construction Partner Since 2022</p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building Your Dreams From The Ground Up
          </h1>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Premium construction services for residential and commercial projects. We turn your vision into reality with quality craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact" className="btn-primary text-center">
              Get a Free Quote
            </Link>
            <Link to="/projects" className="btn-outline border-white text-white hover:bg-white/10 text-center">
              View Our Projects
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">25+</p>
            <p className="text-neutral-400 mt-1">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">4+</p>
            <p className="text-neutral-400 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">135+</p>
            <p className="text-neutral-400 mt-1">Expert Team</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">98%</p>
            <p className="text-neutral-400 mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowRight size={20} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;