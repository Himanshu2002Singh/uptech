import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, GraduationCap, BookOpen, Award, Target, Users, Lightbulb, Code, Database, Globe, Cpu } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Learn Today\nLearn Tomorrow",
      description: "Embrace a future filled with knowledge and possibilities by joining Learn Today, Learn Tomorrow! Dive into a world of continuous learning, shaping your future with every step. Embark on an unending educational adventure. Enhance your intellect now to create a more prosperous tomorrow.",
      buttonText: "Explore Courses"
    },
    {
      title: "Transform Your\nCareer Today",
      description: "Unlock your potential with our comprehensive training programs. Master the latest technologies and methodologies that industry leaders demand. Start your transformation journey with expert-led courses designed for real-world success.",
      buttonText: "Start Learning"
    },
    {
      title: "Industry-Leading\nCertifications",
      description: "Gain recognition with globally accepted certifications from top technology partners. Our certification programs are designed to validate your skills and open doors to new career opportunities in today's competitive market.",
      buttonText: "Get Certified"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Educational Icons */}
        <div className="absolute top-20 left-20 animate-float-slow">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
        </div>
        
        <div className="absolute top-40 right-32 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="absolute bottom-32 left-32 animate-float-reverse">
          <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
            <Award className="h-7 w-7 text-white" />
          </div>
        </div>

        <div className="absolute top-60 left-1/3 animate-float-slow">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Target className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="absolute bottom-40 right-40 animate-float-delayed">
          <div className="w-18 h-18 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center p-4">
            <Lightbulb className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="absolute top-32 right-20 animate-float-reverse">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
            <Code className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="absolute bottom-20 left-1/4 animate-float-slow">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <Database className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 animate-float-delayed">
          <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <Globe className="h-7 w-7 text-white" />
          </div>
        </div>

        <div className="absolute bottom-60 right-20 animate-float-reverse">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <Cpu className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="absolute top-1/3 left-1/2 animate-float-slow">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Animated Circles */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-purple-500/20 rounded-full animate-bounce-slow"></div>
        
        {/* Gradient Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent to-red-600 transform rotate-12 translate-x-32 opacity-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slides[currentSlide].title.split('\n').map((line, index) => (
                  <div
                    key={index}
                    className="transform transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateY(${currentSlide * -100}%)`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {line}
                  </div>
                ))}
              </h1>
            </div>

            <div className="overflow-hidden">
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl transform transition-transform duration-700 ease-out">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center group">
                {slides[currentSlide].buttonText}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Carousel Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white w-6' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - 20+ Years Badge with Enhanced Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Multiple Animated Background Elements */}
              <div className="absolute inset-0 transform rotate-12 animate-pulse">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              </div>
              <div className="absolute inset-0 transform -rotate-12 translate-x-8 translate-y-8 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="w-48 h-48 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20"></div>
              </div>
              <div className="absolute inset-0 transform rotate-45 translate-x-4 translate-y-4 animate-pulse" style={{ animationDelay: '2s' }}>
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-full opacity-15"></div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Award className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Main Badge */}
              <div className="relative z-10 text-center">
                <div className="inline-block">
                  <div className="text-8xl md:text-9xl font-bold">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">20</span>
                    <span className="text-red-500">+</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold tracking-widest mt-2">
                    YEARS
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;