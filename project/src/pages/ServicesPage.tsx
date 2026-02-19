import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Home, Building2, PaintBucket, RotateCcw, PenTool, Ruler, Check, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
  id: string;
  externalUrl?: string; // Add this for external links
}

const Service: React.FC<ServiceProps> = ({ icon, title, description, features, image, reverse, id, externalUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${reverse ? 'bg-neutral-50' : 'bg-white'}`}
    >
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        } ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-500`}>
          <div>
            <div className="bg-primary-100 text-primary-600 p-3 inline-block rounded-lg mb-4">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-neutral-700 mb-6">{description}</p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {externalUrl ? (
              <a href={externalUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
                Explore Plots
              </a>
            ) : (
              <Link to="/contact" className="btn-primary">
                Get a Quote
              </Link>
            )}
          </div>
          <div className={`rounded-xl overflow-hidden shadow-xl h-96 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-500 delay-300`}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | C-Square Construction';
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: ServiceProps[] = [
    {
      id: "residential",
      icon: <Home size={24} />,
      title: "Residential Construction",
      description: "We build custom homes that reflect your personal style and meet your family's needs, using premium materials and expert craftsmanship.",
      features: [
        "Custom home design and construction",
        "Luxury home builds with premium finishes",
        "Multi-family residential developments",
        "Energy-efficient and sustainable home solutions",
        "Comprehensive project management from concept to completion"
      ],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "commercial",
      icon: <Building2 size={24} />,
      title: "Commercial Buildings",
      description: "Our commercial construction services deliver functional, efficient, and impressive spaces for businesses of all sizes.",
      features: [
        "Office buildings and corporate headquarters",
        "Retail spaces and shopping centers",
        "Restaurants and hospitality venues",
        "Industrial facilities and warehouses",
        "Medical offices and healthcare facilities"
      ],
      image: "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reverse: true
    },
    {
      id: "interior",
      icon: <PaintBucket size={24} />,
      title: "Interior Design",
      description: "Transform your space with our professional interior design services that combine aesthetics with functionality.",
      features: [
        "Custom interior layouts and space planning",
        "Material and finish selection",
        "Furniture and fixture recommendations",
        "Lighting design and implementation",
        "Color consultation and theme development"
      ],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "renovation",
      icon: <RotateCcw size={24} />,
      title: "Renovation & Remodeling",
      description: "Breathe new life into your existing property with our comprehensive renovation and remodeling services.",
      features: [
        "Full home renovations and updates",
        "Kitchen and bathroom remodeling",
        "Basement finishing and conversions",
        "Home additions and extensions",
        "Historic property restoration"
      ],
      image: "https://images.pexels.com/photos/7108133/pexels-photo-7108133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reverse: true
    },
    {
      id: "architectural",
      icon: <PenTool size={24} />,
      title: "Architectural Planning",
      description: "Our architectural services help you plan and design your dream building from concept to completion.",
      features: [
        "Conceptual design and development",
        "3D modeling and visualization",
        "Construction document preparation",
        "Permit application assistance",
        "Sustainable design solutions"
      ],
      image: "https://images.pexels.com/photos/5059136/pexels-photo-5059136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "plots",
      icon: <Map size={24} />,
      title: "Plots",
      description: "Browse and book open or available plots in our ventures. Find the perfect plot for your dream project.",
      features: [
        "Open plots in prime locations",
        "Transparent booking process",
        "Verified legal documentation",
        "Flexible plot sizes and pricing",
        "On-site visit and consultation"
      ],
      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reverse: true,
      externalUrl: "https://c-square.co.in/plots/"
    },
    {
      id: "custom",
      icon: <Ruler size={24} />,
      title: "Custom Solutions",
      description: "We provide tailored construction solutions to meet your unique requirements and specifications.",
      features: [
        "Specialized construction requirements",
        "Smart home and automation integration",
        "Outdoor living spaces and landscaping",
        "Accessibility modifications",
        "Custom carpentry and built-ins"
      ],
      image: "https://images.pexels.com/photos/3626526/pexels-photo-3626526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reverse: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div 
            ref={ref}
            className={`max-w-3xl transition-all duration-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100">
              From residential to commercial construction, we offer a comprehensive range of services to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <nav className="flex flex-wrap gap-4">
            <a href="#residential" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Residential
            </a>
            <a href="#commercial" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Commercial
            </a>
            <a href="#interior" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Interior Design
            </a>
            <a href="#renovation" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Renovation
            </a>
            <a href="#architectural" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Architectural
            </a>
            <a href="#plots" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Plots
            </a>
            <a href="#custom" className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
              Custom Solutions
            </a>
          </nav>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <Service
          key={index}
          id={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          reverse={service.reverse}
          externalUrl={service.externalUrl}
        />
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your construction needs and get a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
            <Link to="/projects" className="btn bg-white text-primary-800 hover:bg-neutral-100">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;