import React from 'react';
import { ArrowRight } from 'lucide-react';
import helpdesk from '../../assets/helpdesk (1).gif';
import manuals from '../../assets/manual.gif';
import betcourses from '../../assets/online-student.gif';

const ReasonsSection: React.FC = () => {
  const reasons = [
    {
      icon: helpdesk,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you whenever needed.",
    },
    {
      icon: manuals,
      title: "Top Guide",
      description:
        "Get expert guidance and resources tailored to help you succeed efficiently and confidently.",
    },
    {
      icon: betcourses,
      title: "Best Course",
      description:
        "We offer the most comprehensive and industry-relevant courses curated by top professionals.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            3 Reasons To Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
            >
              <div className="flex flex-col h-full">
                {/* Icon as Image */}
                <div className="mb-6">
                  <div className="w-20 h-20  rounded-xl flex items-center justify-center overflow-hidden group-hover:bg-teal-200 transition-colors duration-300">
                    <img
                      src={reason.icon}
                      alt={reason.title}
                      className="w-15 h-15 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {reason.description}
                  </p>
                </div>

                {/* Action */}
                <div className="mt-auto">
                  <button className="group/btn flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection
