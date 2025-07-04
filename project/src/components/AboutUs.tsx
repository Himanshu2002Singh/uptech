import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Globe, 
  CheckCircle,
  
  ArrowRight,
  Play
} from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    countries: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: 'Happy Students', value: 50000, suffix: '+', color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, label: 'Courses', value: 500, suffix: '+', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: 'Expert Instructors', value: 200, suffix: '+', color: 'from-green-500 to-teal-500' },
    { icon: Globe, label: 'Countries', value: 25, suffix: '+', color: 'from-orange-500 to-red-500' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Industry-Focused Training',
      description: 'Our courses are designed with real-world applications in mind, ensuring you gain practical skills that employers value.'
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Get globally recognized certifications from leading technology partners and boost your career prospects.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Join thousands of professionals who have advanced their careers through our comprehensive training programs.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [index === 0 ? 'students' : index === 1 ? 'courses' : index === 2 ? 'instructors' : 'countries']: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-500 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">UPtech Automation</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
           
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
  We are a venture startup and a group of associated companies like <span className=" font-bold text-lg px-1 rounded">Demco Technologies</span>, <span className=" font-bold text-lg px-1 rounded">Melwirt</span>, and <span className=" font-bold text-lg px-1 rounded">Santec Group</span> with more than 20 years of industrial experience aimed to update engineers and small/medium scale industries in India in various technologies like <span className=" font-bold text-lg px-1 rounded">AI-ML</span>, <span className=" font-bold text-lg px-1 rounded">data science</span>, <span className=" font-bold text-lg px-1 rounded">business analysis</span>, <span className=" font-bold text-lg px-1 rounded">task automation</span>, <span className=" font-bold text-lg px-1 rounded">industrial automation</span>, <span className=" font-bold text-lg px-1 rounded">cloud computing</span>, <span className=" font-bold text-lg px-1 rounded">cyber security</span>, <span className=" font-bold text-lg px-1 rounded">full stack app development</span> and many more.
  <br className="my-2" />
  We also support manpower recruitment for top companies including <span className=" font-bold text-lg px-1 rounded">Dyanamic Engineers Limited</span>, <span className=" font-bold text-lg px-1 rounded">Tycoon Automation</span>, <span className=" font-bold text-lg px-1 rounded">Automax Solutions</span>, <span className=" font-bold text-lg px-1 rounded">Perfect Automation</span>, <span className=" font-bold text-lg px-1 rounded">Reliable Controls</span>, <span className=" font-bold text-lg px-1 rounded">SI Energy Venture</span>, <span className=" font-bold text-lg px-1 rounded">Nocle System</span>, <span className=" font-bold text-lg px-1 rounded">ATC Engineering</span>, <span className=" font-bold text-lg px-1 rounded">DTech Controls</span>, <span className=" font-bold text-lg px-1 rounded">GP Systems</span> and <span className=" font-bold text-lg px-1 rounded">Creative Robotics</span>.
</p>

          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const counterValue = Object.values(counters)[index];
            
            return (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-transparent to-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {counterValue.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Transforming Careers Through Excellence
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Since our inception, UPtech Automation has been dedicated to bridging the gap between 
                  academic learning and industry requirements. We specialize in delivering high-quality 
                  training programs that are aligned with current market demands and future trends.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our comprehensive approach combines theoretical knowledge with practical application, 
                  ensuring our students are job-ready and equipped with the skills that matter most in today's competitive landscape.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  'Industry-aligned curriculum designed by experts',
                  'Hands-on training with real-world projects',
                  'Flexible learning options for working professionals',
                  'Post-training support and career guidance'
                ].map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transform transition-all duration-700 ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - Video/CTA */}
        <div className="mt-20 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(20)].map((_, i) => (
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
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals who have already taken the leap towards success. 
                  Start your learning journey today and unlock your potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Play className="h-5 w-5 text-red-600" />
                    <span>Watch Our Story</span>
                  </button>
                  <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span>Start Learning Today</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;