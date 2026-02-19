import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  year: number;
  url: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Residential Complex",
    description: "A luxury residential complex featuring 24 custom homes with modern architecture and premium finishes.",
    category: "residential",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Los Angeles, CA",
    year: 2023,
    url: "/projects/modern-residential",
    featured: true
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    description: "A state-of-the-art office building designed for a tech company with sustainable features and modern workspaces.",
    category: "commercial",
    image: "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "San Francisco, CA",
    year: 2022,
    url: "/projects/corporate-headquarters",
    featured: true
  },
  {
    id: 3,
    title: "Luxury Villa Renovation",
    description: "Complete renovation of a Mediterranean-style villa with modern amenities while preserving historical elements.",
    category: "renovation",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Miami, FL",
    year: 2023,
    url: "/projects/luxury-villa",
    featured: true
  },
  {
    id: 4,
    title: "Shopping Mall Development",
    description: "A multi-level shopping center with retail spaces, restaurants, and entertainment venues.",
    category: "commercial",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Chicago, IL",
    year: 2021,
    url: "/projects/shopping-mall",
    featured: true
  },
  {
    id: 5,
    title: "Seaside Residential Estate",
    description: "A luxury beachfront property with custom design elements that maximize ocean views and natural light.",
    category: "residential",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Malibu, CA",
    year: 2022,
    url: "/projects/seaside-estate",
    featured: false
  },
  {
    id: 6,
    title: "Hospital Wing Addition",
    description: "A new wing added to an existing hospital with state-of-the-art medical facilities and patient rooms.",
    category: "commercial",
    image: "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Boston, MA",
    year: 2022,
    url: "/projects/hospital-wing",
    featured: false
  },
  {
    id: 7,
    title: "Historic Building Restoration",
    description: "Careful restoration of a 19th-century building, preserving its architectural heritage while adding modern functionality.",
    category: "renovation",
    image: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Charleston, SC",
    year: 2021,
    url: "/projects/historic-restoration",
    featured: false
  },
  {
    id: 8,
    title: "Eco-Friendly Apartment Complex",
    description: "A sustainable multi-family residential development with solar power, green roofs, and energy-efficient systems.",
    category: "residential",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Portland, OR",
    year: 2023,
    url: "/projects/eco-friendly-apartments",
    featured: false
  },
  {
    id: 9,
    title: "Mountain Retreat",
    description: "A custom-built vacation home in the mountains with natural materials and panoramic views.",
    category: "residential",
    image: "https://images.pexels.com/photos/21694/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Aspen, CO",
    year: 2022,
    url: "/projects/mountain-retreat",
    featured: false
  },
  {
    id: 10,
    title: "Restaurant Renovation",
    description: "Complete overhaul of a restaurant space with custom kitchen facilities and stylish dining areas.",
    category: "renovation",
    image: "https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "New York, NY",
    year: 2023,
    url: "/projects/restaurant-renovation",
    featured: false
  },
  {
    id: 11,
    title: "Boutique Hotel",
    description: "A luxury boutique hotel with unique design elements in each room and upscale amenities.",
    category: "commercial",
    image: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Austin, TX",
    year: 2021,
    url: "/projects/boutique-hotel",
    featured: false
  },
  {
    id: 12,
    title: "Modern Farmhouse",
    description: "A contemporary take on the classic farmhouse style with open spaces and rustic elements.",
    category: "residential",
    image: "https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Nashville, TN",
    year: 2022,
    url: "/projects/modern-farmhouse",
    featured: false
  }
];

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Projects | C-Square Construction';
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const filtered = projects.filter(project => {
      // Filter by category
      const categoryMatch = activeFilter === 'all' || project.category === activeFilter;
      
      // Filter by search query
      const searchMatch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
    
    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery]);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-100">
              Explore our portfolio of completed construction projects spanning residential, commercial, and renovation work.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('residential')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === 'residential' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveFilter('commercial')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === 'commercial' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveFilter('renovation')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === 'renovation' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Renovation
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-auto pl-10 pr-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-700">No projects found matching your criteria.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary-600 font-medium hover:text-primary-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can bring your construction vision to life with the same quality and attention to detail shown in our portfolio.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
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
    <div 
      ref={ref}
      className={`card overflow-hidden transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-neutral-600 mb-4">{project.description}</p>
        <div className="flex justify-between text-sm text-neutral-500 mb-4">
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>
        <a 
          href={project.url} 
          className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
        >
          View Project <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;