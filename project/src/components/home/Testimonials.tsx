import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Raghava Ramachandra",
    position: "Homeowner",
    company: "Residential Client",
    quote: "We couldn't be happier with our new home. C-Square delivered beyond our expectations, with excellent attention to detail and quality craftsmanship throughout the entire process.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Suryanarayana Shastry",
    position: "CEO",
    company: "Surya Enterprises",
    quote: "The commercial building C-Square constructed for our company headquarters is stunning. They completed the project on time and within budget, and the result is exactly what we envisioned.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Lakshmikanth Aravind",
    position: "Property Developer",
    company: "Urban Living Spaces",
    quote: "C-Square's team demonstrated exceptional professionalism and expertise throughout our multi-unit residential project. Their ability to solve complex construction challenges was impressive.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear what our satisfied clients have to say about our construction services.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute top-0 left-0'
                }`}
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <div className="card p-8 md:p-10">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonial.rating ? "text-secondary-500 fill-secondary-500" : "text-neutral-300"}
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-neutral-700 font-light italic mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-neutral-300 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-neutral-300 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  activeIndex === index ? 'bg-primary-600 w-6' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;