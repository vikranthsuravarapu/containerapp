import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, HardHat } from 'lucide-react';
import MainLogo from '../../../public/logo.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem('token');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300">
      <div className="container-custom flex items-center justify-between">
      {/* Logo */}
        
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-800"><img src={MainLogo} alt="C Square Logo" className='object-contain max-h-[60px] aspect-square'/></span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <NavLink to="/" end className={({ isActive }) =>
            `text-base font-medium transition-colors duration-200 ${
              isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
            }`
          }>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `text-base font-medium transition-colors duration-200 ${
              isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
            }`
          }>About</NavLink>
          <NavLink to="/services" className={({ isActive }) =>
            `text-base font-medium transition-colors duration-200 ${
              isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
            }`
          }>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) =>
            `text-base font-medium transition-colors duration-200 ${
              isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
            }`
          }>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `text-base font-medium transition-colors duration-200 ${
              isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
            }`
          }>Contact</NavLink>
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+919010011734"
            className="flex items-center text-sm font-medium"
          >
            <Phone size={16} className="mr-2 text-primary-600" />
            <span className="text-neutral-800">+91 9010011734</span>
          </a>
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
          {!token ? (
            <>
              <Link
                to="/login"
                className="btn-primary"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn-primary"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="btn-primary"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/';
                }}
                className="btn-primary"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className="text-neutral-800" />
          ) : (
            <Menu size={24} className="text-neutral-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 mt-2 animate-slide-down">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" end className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                }`
              } onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                }`
              } onClick={toggleMenu}>About</NavLink>
              <NavLink to="/services" className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                }`
              } onClick={toggleMenu}>Services</NavLink>
              <NavLink to="/projects" className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                }`
              } onClick={toggleMenu}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                }`
              } onClick={toggleMenu}>Contact</NavLink>
              <div className="pt-4 border-t border-neutral-200 mt-2 space-y-2">
                <a
                  href="tel:+919010011734"
                  className="flex items-center text-sm font-medium text-neutral-800"
                >
                  <Phone size={16} className="mr-2 text-primary-600" />
                  +91 9010011734
                </a>
                <a
                  href="mailto:info@c-square.co.in"
                  className="flex items-center text-sm font-medium text-neutral-800 mt-2"
                >
                  <Mail size={16} className="mr-2 text-primary-600" />
                  info@c-square.co.in
                </a>
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center mt-4"
                  onClick={toggleMenu}
                >
                  Get a Quote
                </Link>
                {!token ? (
                  <>
                    <Link
                      to="/login"
                      className="btn-primary w-full text-center"
                      onClick={toggleMenu}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="btn-primary w-full text-center"
                      onClick={toggleMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="btn-primary w-full text-center"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/';
                      }}
                      className="btn-primary w-full text-center"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;