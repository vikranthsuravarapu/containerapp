import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Calendar, Clock, Send, Users, CheckCircle, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | C-Square Construction';
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const { name, email, message } = formData;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919010011734', '_blank');
  };

  const handleBookConsultation = () => {
    window.location.href = '/contact';
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Have a project in mind? Get in touch with our team to discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-neutral-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible to discuss your project.
              </p>

              {isSubmitted ? (
                <div className="bg-success-50 border border-success-500 text-success-900 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. One of our team members will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+91 9010011734"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-1">
                        Project Type*
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="input"
                        required
                      >
                        <option value="">Select Project Type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="renovation">Renovation</option>
                        <option value="interior">Interior Design</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-neutral-700 mb-8">
                You can reach us through any of the following channels or visit our office during business hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                    <p className="text-neutral-700">
                      PRIDVI CREST,<br />
                      Giddalur,<br />
                      Prakasam,<br />
                      Andhrapradesh - 523357
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-neutral-700">
                      <a href="tel:+919010011734" className="hover:text-primary-600 transition-colors">
                        +91 9010011734
                      </a>
                      <br />
                      <span className="text-sm text-neutral-500">Monday to Friday, 8am to 6pm</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-neutral-700">
                      <a href="mailto:info@c-square.co.in" className="hover:text-primary-600 transition-colors">
                        info@c-square.co.in
                      </a>
                      <br />
                      <span className="text-sm text-neutral-500">We'll respond as quickly as possible</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-neutral-700 hover:text-primary-600 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="mr-2 text-primary-600" size={20} />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="h-96 bg-neutral-200 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15375.17264444215!2d79.35000967068918!3d15.374444895839706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4f6c6f5f0f8a1%3A0x3c3b2c4c3b3b3b3b!2sGiddalur%2C%20Andhra%20Pradesh%20523357!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
                <p className="text-neutral-700 mb-6">
                  Schedule a free consultation with one of our experts to discuss your construction project in detail.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-primary-600 mr-3" />
                    <span>Choose a date and time that works for you</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary-600 mr-3" />
                    <span>Meet with our experienced team members</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-primary-600 mr-3" />
                    <span>Get personalized recommendations for your project</span>
                  </div>
                </div>
                <button 
                  onClick={handleBookConsultation}
                  className="btn-primary"
                >
                  Book Your Free Consultation
                </button>
              </div>
              <div 
                className="hidden lg:block bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;