import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const StepsSection: React.FC = () => {
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

  const stats = [
    { number: "500+", label: "Courses" },
    { number: "50K+", label: "Reviews" },
    { number: "50K+", label: "Students" },
    { number: "25K+", label: "Graduates" }
  ];

  const bulletPoints = [
    "We are a venture startup backed by a consortium of companies including Demco Technologies, Melwirt, and Santec Group.",
    "Collectively, we bring more than 20 years of industrial experience to the table.",
    "Our mission is to update engineers and small/medium scale industries in India with cutting-edge technologies.",
    "We offer training in AI/ML, Data Science, Business & Data Analysis, Automation, Cloud Computing, Cybersecurity, Full Stack Development, and more.",
    "We support manpower recruitment for top companies including Dynamic Engineers Ltd, Tycoon Automation, Automax Solutions, and Perfect Automation.",
    "Our hiring network includes Max Automation, Reliable Controls, SI Energy Venture, Nocle System, ATC Engineering, and more.",
    "We connect high-end users with quality professionals to drive productivity, innovation, and business growth."
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Bullet Points */}
          <div className="space-y-6">
  {bulletPoints.map((point, index) => {
    const highlights = [
      "venture startup",
      "Demco Technologies",
      "Melwirt",
      "Santec Group",
      "20 years",
      "update engineers",
      "AI/ML",
      "Data Science",
      "Automation",
      "Cloud Computing",
      "Cybersecurity",
      "Full Stack Development",
      "manpower recruitment",
      "Dynamic Engineers Ltd",
      "Tycoon Automation",
      "Max Automation",
      "Reliable Controls",
      "drive productivity",
 
    ];

    const getHighlightedText = (text: string) => {
      let parts: (string | JSX.Element)[] = [text];
      highlights.forEach(word => {
        parts = parts.flatMap(part =>
          typeof part === "string"
            ? part.split(new RegExp(`(${word})`, "gi")).map(p =>
                p.toLowerCase() === word.toLowerCase()
                  ? <span className=" text-sm font-bold px-1 rounded" key={word + Math.random()}>{p}</span>
                  : p
              )
            : [part]
        );
      });
      return parts;
    };

    return (
      <div
        key={index}
        className={`flex items-start space-x-4 transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          {getHighlightedText(point)}
        </p>
      </div>
    );
  })}
</div>


          {/* Right Side - Image and Stats */}
          <div className={`flex flex-col items-center transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="relative mb-8">
              {/* Background Animation */}
              <div className="absolute inset-0 transform rotate-12 animate-pulse">
                <div className="w-80 h-80 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20"></div>
              </div>
              <div className="absolute inset-0 transform -rotate-12 translate-x-4 translate-y-4 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
              </div>

              {/* Main Image */}
              <div className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-red-600 to-orange-600 p-3 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Success Story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg p-3 shadow-lg transform rotate-12 animate-bounce">
                <div className="text-sm font-bold">Success!</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-red-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
