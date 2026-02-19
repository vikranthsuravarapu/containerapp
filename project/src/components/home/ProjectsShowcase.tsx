import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Residential Complex",
    category: "Residential",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/projects/modern-residential",
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/projects/corporate-headquarters",
  },
  {
    id: 3,
    title: "Luxury Villa Renovation",
    category: "Renovation",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/projects/luxury-villa",
  },
  {
    id: 4,
    title: "Shopping Mall Development",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "/projects/shopping-mall",
  },
];

const ProjectsShowcase: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="section-title">Our Featured Projects</h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Explore some of our best work across residential, commercial, and renovation projects.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700 transition-colors"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Link 
      to={project.url} 
      ref={ref}
      className={`group card overflow-hidden transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span className="text-sm font-medium bg-primary-600 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsShowcase;