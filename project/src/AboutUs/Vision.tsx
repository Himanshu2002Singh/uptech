
import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

// ✅ Import images from assets folder
import InnovationIcon from "../../assets/world-creativity-and-innovation-day.gif";
import ExcellenceIcon from "../../assets/high-quality.gif";
import AccessibilityIcon from "../../assets/talent-hunt.gif";
import CommunityIcon from "../../assets/global-connection.gif";


const VisionMissionSection: React.FC = () => {
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


  
  const values = [
    {
      title: "Innovation",
      description: "Embracing new technologies and methodologies",
      image: InnovationIcon,
    },
    {
      title: "Excellence",
      description: "Delivering the highest quality in everything we do",
      image: ExcellenceIcon,
    },
    {
      title: "Accessibility",
      description: "Making education available to everyone, everywhere",
      image: AccessibilityIcon,
    },
    {
      title: "Community",
      description: "Building supportive learning environments",
      image: CommunityIcon,
    },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision */}
          <div className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-200 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Our Vision</h2>
            </div>
           <p className="text-lg text-gray-700 leading-relaxed mb-6">
  To become the world's leading platform for accessible, high-quality education that transforms lives and communities through innovative learning experiences.
  We strive to empower micro, small, and medium enterprises by connecting them with skilled technocrats and enabling collaborative growth through technology.
</p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Global accessibility to quality education</span>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Innovation in learning methodologies</span>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Empowering learners worldwide</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-red-200 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
  We democratize education by providing innovative, practical, and engaging learning experiences that prepare students for success in their chosen fields.
  Our mission also includes supporting MSMEs by connecting high-end users with quality professionals to boost productivity, quality, and product outreach—made possible through experience sharing and expert guidance from our team.
</p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Expert-led courses and mentorship</span>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Practical, industry-relevant curriculum</span>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Supportive learning community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-red-600">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to educational excellence
            </p>
          </div>





    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <div
          key={index}
          className={`text-center group transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: `${600 + index * 150}ms` }}
        >
          {/* Image box */}
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <img
              src={value.image}
              alt={value.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
            {value.title}
          </h3>
          <p className="text-gray-600 text-sm">{value.description}</p>
        </div>
      ))}
    </div>
 

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;