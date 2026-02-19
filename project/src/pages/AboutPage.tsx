import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | C-Square Construction';
  }, []);

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div 
            ref={heroRef}
            className={`max-w-3xl transition-all duration-500 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About C-Square Construction</h1>
            <p className="text-xl text-primary-100 mb-8">
              Building excellence since 2022, we've established ourselves as a trusted name in construction with a commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-neutral-700 mb-4">
                Founded in 2022 by Bhanu Chandu, C-Square began as a small residential construction company with a big vision. With just a team of five dedicated professionals, we set out to change how people experience the construction process.
              </p>
              <p className="text-lg text-neutral-700 mb-4">
                Our founder's passion for quality craftsmanship and honest business practices quickly earned us a reputation for excellence in the community. As word spread, so did our team and project portfolio.
              </p>
              <p className="text-lg text-neutral-700">
                Today, C-Square employs over 135 construction professionals and has completed more than 25 projects across residential, commercial, and renovation sectors. Despite our growth, we remain committed to the same values that guided us from day one: quality, integrity, and client satisfaction.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="C-Square team at construction site" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div 
            ref={valuesRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-500 ${
              valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-neutral-700">
              These principles guide everything we do, from how we interact with clients to how we execute each project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-primary-100 text-primary-600 p-3 inline-block rounded-lg mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-neutral-700">
                We're committed to delivering exceptional quality in every aspect of our work, from materials to craftsmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-primary-100 text-primary-600 p-3 inline-block rounded-lg mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-neutral-700">
                We operate with honesty and transparency in all our dealings, building trust with our clients and partners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-primary-100 text-primary-600 p-3 inline-block rounded-lg mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-neutral-700">
                We believe in working closely with clients, architects, and all stakeholders to achieve shared goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-primary-100 text-primary-600 p-3 inline-block rounded-lg mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Timeliness</h3>
              <p className="text-neutral-700">
                We respect deadlines and work efficiently to deliver projects on schedule without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div 
            ref={teamRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-500 ${
              teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-neutral-700">
              Our experienced leadership team brings decades of combined expertise in construction, architecture, and project management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              {/* <div className="rounded-xl overflow-hidden h-64 mb-4">
                <img 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="John Masters" 
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold">Bhanu Chandu Peddisetty</h3>
              <p className="text-primary-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              {/* <div className="rounded-xl overflow-hidden h-64 mb-4">
                <img 
                  src="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold">Raja Sekhar Mamidala</h3>
              <p className="text-primary-600">Chief Operations Officer</p>
            </div>
            <div className="text-center">
              {/* <div className="rounded-xl overflow-hidden h-64 mb-4">
                <img 
                  src="https://images.pexels.com/photos/8422401/pexels-photo-8422401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Robert Chen" 
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold">Sonu Bhusan Lanka</h3>
              <p className="text-primary-600">Chief Architect</p>
            </div>
            <div className="text-center">
              {/* <div className="rounded-xl overflow-hidden h-64 mb-4">
                <img 
                  src="https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Maria Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div> */}
              <h3 className="text-xl font-semibold">Dileep Kumar</h3>
              <p className="text-primary-600">Project Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-300 mb-2">4+</p>
              <p className="text-lg">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-300 mb-2">25+</p>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-300 mb-2">135+</p>
              <p className="text-lg">Team Members</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-300 mb-2">98%</p>
              <p className="text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;