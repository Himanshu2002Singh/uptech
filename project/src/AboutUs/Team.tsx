import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../components/redux/hooks';
import { fetchTeamMembers } from '../components/redux/slices/teamSlice';

const TeamSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { members, loading, error } = useAppSelector((state) => state.team);
  
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) setIsVisible(true);
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) observer.observe(sectionRef.current);
  //   return () => observer.disconnect();
  // }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [members]);

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + members.length) % members.length;
    if (position === 0) {
      return {
        transform: 'translateX(0%) translateZ(50px) scale(1.1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (position === 1 || position === members.length - 1) {
      const isRight = position === 1;
      return {
        transform: `translateX(${isRight ? '20%' : '-20%'}) translateZ(-20px) scale(0.9)`,
        zIndex: 20,
        opacity: 0.7,
      };
    } else {
      return {
        transform: 'translateX(0%) translateZ(-50px) scale(0.8)',
        zIndex: 10,
        opacity: 0,
      };
    }
  };

if (loading) return <div className="text-white text-center py-20">Loading team members...</div>;
if (error) return <div className="text-red-500 text-center py-20">{error}</div>;
if (!Array.isArray(members) || members.length === 0) return <div className="text-white text-center py-20">No team members found.</div>;


  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background animation */}
      
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 transform transition-all duration-1000" >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-red-600">Expert Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate educators and industry experts dedicated to your success
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* Carousel */}
          <div className="relative w-full lg:w-1/2">
            <div className="flex justify-center items-center h-[500px]" style={{ perspective: '1000px' }}>
              {members.map((member, index) => (
                <div
                  key={index}
                  className="absolute w-80 transition-all duration-700 ease-in-out cursor-pointer"
                  style={getCardStyle(index)}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative h-96">
                    <div className="absolute -top-4 left-6 bg-green-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {member.id}
                    </div>
                    <div className="mb-6 mt-4">
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute top-44 right-6 bg-white rounded-lg px-3 py-2 shadow-md">
                        <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-gray-900">{member.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-40">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 z-40">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-teal-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xl mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{members[currentIndex].name}</h3>
              <p className="text-teal-600 font-medium mb-3">{members[currentIndex].title}</p>
              <p className="text-gray-600 leading-relaxed">{members[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
