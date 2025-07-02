import { useState, useEffect, useRef } from 'react';

import Users from '../../assets/talent-hunt.gif';
import Award from '../../assets/manufacture.gif';
import Zap from '../../assets/flexible.gif'; 
import Shield from '../../assets/high-quality.gif';
import TrendingUp from '../../assets/credit.gif';
import Headphones from '../../assets/helpdesk (1).gif';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Diverse Talent Pool',
      description: 'We have a diverse pool of talented and skilled professionals who are trained and ready to excel in roles that demand reliability and commitment.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Offering a vast range of services, from logistics and manufacturing to healthcare and hospitality.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Flexibility & Scale',
      description: 'Whether you need temporary or permanent staffing, we adapt to your business needs—delivering talent for small projects or large-scale operations.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'Every candidate undergoes a rigorous selection process to ensure they meet your standards and exceed expectations.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      icon: TrendingUp,
      title: 'Speed & Efficiency',
      description: 'With our extensive network and streamlined processes, we deliver talent faster, minimizing downtime and maximizing productivity.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Our dedicated support team is available 24/7 to assist with any concerns, ensuring seamless collaboration.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-500 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-red-600">Us?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart and makes us the preferred choice for thousands of professionals and organizations worldwide.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {features.map((feature, index) => {
          return (
            <div
              key={index}
              className={`group ${feature.bgColor} ${feature.hoverColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 border-red-200 transform -translate-y-3 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
                >
                {/* Icon */}
                  <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {/* Use img tag for GIFs */}
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="h-12 w-12 object-contain" 
                  />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-transparent to-white/20 rounded-xl animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <ArrowRight className="h-5 w-5 text-red-600" />
                </div>

                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 overflow-hidden rounded-tr-2xl">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.color} transform rotate-45 translate-x-8 -translate-y-8`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-center relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">100+</div>
                    <div className="text-gray-300">Industry Partners</div>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Experience Excellence?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied clients who have chosen us for their training and development needs.
                </p>
                <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;