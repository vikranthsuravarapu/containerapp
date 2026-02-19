import React from 'react';
import { Home, Building2, Users, Ruler, Factory, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="bg-primary-100 text-primary-600 p-3 inline-block rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      {link ? (
        <a href={link} className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
          Explore Plots <ArrowRight size={16} className="ml-2" />
        </a>
      ) : (
        <Link to="/services" className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
          Learn More <ArrowRight size={16} className="ml-2" />
        </Link>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Users size={24} />,
      title: "Labour Services",
      description: "Professional workforce available for daily construction needs, from skilled laborers to specialized craftsmen.",
    },
    {
      icon: <Home size={24} />,
      title: "House Construction",
      description: "Complete house construction services with quality materials and expert craftsmanship for your dream home.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Villa Construction",
      description: "Luxury villa construction with premium finishes and attention to detail for sophisticated living spaces.",
    },
    {
      icon: <Map size={24} />,
      title: "Site Development",
      description: "Comprehensive site preparation and development services including grading, utilities, and infrastructure.",
    },
    {
      icon: <Map size={24} />,
      title: "Plots",
      description: "Browse and book open or available plots in our ventures. Find the perfect plot for your dream project.",
      link: "/plots/",
    },
    {
      icon: <Factory size={24} />,
      title: "Factory Construction",
      description: "Industrial facility construction with focus on efficiency, safety, and modern manufacturing requirements.",
    },
    {
      icon: <Ruler size={24} />,
      title: "Custom Solutions",
      description: "Tailored construction solutions to meet your specific requirements and project specifications.",
    },
  ];

  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive construction services from daily labor to complete industrial facilities, ensuring quality and reliability at every scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
};

export default Services;