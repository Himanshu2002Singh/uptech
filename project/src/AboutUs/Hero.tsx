import React, { useState, useEffect } from 'react';
import { Star, Play, Download, GraduationCap, BookOpen, Award, Target, Users, Lightbulb, Code, Database, Globe, Cpu } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements - Same as main hero */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className={`lg:w-1/2 text-white space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm opacity-90">4.9 Rate | 50K+ Reviews</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About <span className="text-red-600">Uptech</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Automation
                </span>
                
              </h1>
              
              <p className="text-lg lg:text-xl opacity-90 max-w-lg leading-relaxed">
                Empowering learners worldwide through innovative education. We believe in transforming lives through accessible, high-quality learning experiences that shape the future.
                
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Download className="w-5 h-5" />
                <span>Our Story</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">50K+</div>
                <div className="text-sm opacity-80">Students Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">200+</div>
                <div className="text-sm opacity-80">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">25+</div>
                <div className="text-sm opacity-80">Countries Reached</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image */}
          <div className={`lg:w-1/2 mt-12 lg:mt-0 flex justify-center transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              {/* Multiple Animated Background Elements */}
              <div className="absolute inset-0 transform rotate-12 animate-pulse">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              </div>
              <div className="absolute inset-0 transform -rotate-12 translate-x-8 translate-y-8 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Team Leader"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-bounce">
                  <Star className="w-6 h-6 text-red-500 fill-current" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-3 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg animate-pulse">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave - Matching project theme */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-gray-50">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;