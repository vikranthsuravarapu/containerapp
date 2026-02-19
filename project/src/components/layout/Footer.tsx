import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, HardHat, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919010011734', '_blank');
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <HardHat size={32} className="text-primary-500" />
              <span className="text-2xl font-bold">C-Square</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Premium construction services for residential and commercial projects. Building dreams since 2022.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Labour Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  House Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Villa Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Site Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  Factory Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">
                  PRIDVI CREST,<br />
                  Giddalur,<br />
                  Prakasam,<br />
                  Andhrapradesh - 523357
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+919010011734" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  +91 9010011734
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@c-square.co.in" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  info@c-square.co.in
                </a>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center text-neutral-400 hover:text-primary-500 transition-colors"
              >
                <MessageCircle size={20} className="mr-3" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center md:flex md:justify-between">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} C-Square Construction. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-neutral-500">
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;