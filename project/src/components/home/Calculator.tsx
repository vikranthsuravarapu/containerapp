import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calculator as CalculatorIcon, Users, Building, HelpCircle } from 'lucide-react';

const Calculator: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [serviceType, setServiceType] = useState<string>('labour');
  const [duration, setDuration] = useState<number>(1);
  const [workers, setWorkers] = useState<number>(5);
  const [projectSize, setProjectSize] = useState<string>('small');

  // Base rates per service type in INR
  const baseRates = {
    labour: {
      small: 800,    // per worker per day
      medium: 1000,
      large: 1200,
    },
    house: {
      small: 2500000,  // base price for house construction
      medium: 5000000,
      large: 10000000,
    },
    villa: {
      small: 15000000,  // base price for villa construction
      medium: 25000000,
      large: 40000000,
    },
    site: {
      small: 1000000,  // base price for site development
      medium: 2500000,
      large: 5000000,
    },
    factory: {
      small: 20000000,  // base price for factory construction
      medium: 35000000,
      large: 50000000,
    }
  };

  const calculateEstimate = () => {
    let totalCost = 0;

    if (serviceType === 'labour') {
      const dailyRate = baseRates.labour[projectSize as keyof typeof baseRates.labour];
      totalCost = dailyRate * workers * duration;
    } else {
      const baseCost = baseRates[serviceType as keyof typeof baseRates][projectSize as keyof typeof baseRates.labour];
      totalCost = baseCost;
    }

    return totalCost;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title">Cost Estimator</h2>
          <p className="section-subtitle">
            Get a rough estimate for your construction project. Use our calculator to get started with budgeting.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-neutral-50 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Calculator Inputs */}
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <CalculatorIcon className="mr-2 text-primary-600" size={24} />
                  Project Details
                </h3>

                {/* Service Type */}
                <div className="mb-6">
                  <label className="block text-neutral-700 font-medium mb-2">Service Type</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="labour">Daily Labour</option>
                    <option value="house">House Construction</option>
                    <option value="villa">Villa Construction</option>
                    <option value="site">Site Development</option>
                    <option value="factory">Factory Construction</option>
                  </select>
                </div>

                {/* Project Size */}
                <div className="mb-6">
                  <label className="block text-neutral-700 font-medium mb-2">Project Size</label>
                  <select
                    value={projectSize}
                    onChange={(e) => setProjectSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                {serviceType === 'labour' && (
                  <>
                    {/* Number of Workers */}
                    <div className="mb-6">
                      <label className="block text-neutral-700 font-medium mb-2">
                        Number of Workers: {workers}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={workers}
                        onChange={(e) => setWorkers(parseInt(e.target.value))}
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-neutral-600 mt-1">
                        <span>1 worker</span>
                        <span>50 workers</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="mb-6">
                      <label className="block text-neutral-700 font-medium mb-2">
                        Duration (days): {duration}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-neutral-600 mt-1">
                        <span>1 day</span>
                        <span>30 days</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Results */}
              <div className="bg-primary-900 text-white p-6 md:p-10">
                <h3 className="text-2xl font-semibold mb-6">Estimated Costs</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-primary-100">Estimated Total</span>
                      <span className="text-2xl font-bold">{formatCurrency(calculateEstimate())}</span>
                    </div>
                    {serviceType === 'labour' && (
                      <div className="text-sm text-primary-200">
                        {workers} workers × {duration} days
                      </div>
                    )}
                  </div>

                  <div className="border-t border-primary-700 pt-4">
                    <div className="flex items-start bg-primary-800 rounded-lg p-4">
                      <HelpCircle className="text-primary-300 mr-3 flex-shrink-0 mt-1" size={20} />
                      <div className="text-sm text-primary-200">
                        <p className="font-medium text-primary-100 mb-1">Note:</p>
                        <p>This is a rough estimate only. Final costs may vary based on specific project requirements, materials, location, and other factors. Contact us for a detailed quote.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="btn bg-white text-primary-800 hover:bg-neutral-100 w-full text-center"
                  >
                    Get a Detailed Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;