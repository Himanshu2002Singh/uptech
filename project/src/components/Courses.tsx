import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, Book, Code, Cpu, Zap, Database, ArrowLeft, Star, Clock, Users, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../components/redux/hooks';
import { submitEnrollment, resetEnrollState } from '../components/redux/slices/enrollSlice'; // Import your Redux actions

interface Course {
  id: string;
  name: string;
  icon: React.ElementType;
  placeholder?: string;
  color: string;
  technologies: Technology[];
}

interface Technology {
  id: string;
  name: string;
  description: string;
  stacks: Stack[];
  color: string;
  duration: string;
  students: string;
  rating: number;
}

interface Stack {
  id: string;
  name: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string;
}

const courses: Course[] = [
  {
    id: 'cs',
    name: 'Computer Science',
    icon: Code,
    placeholder:'Computer Science',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      {
        id: 'web-dev',
        name: 'Web Development',
        description: 'Build modern web applications with cutting-edge technologies',
        color: 'bg-gradient-to-br from-indigo-50 to-blue-50',
        duration: '6-12 months',
        students: '15,000+',
        rating: 4.8,
        stacks: [
          { id: 'mern', name: 'MERN Stack', description: 'MongoDB, Express, React, Node.js - Full-stack JavaScript development', level: 'Intermediate', duration: '4 months', price: '₹1299' },
          { id: 'mean', name: 'MEAN Stack', description: 'MongoDB, Express, Angular, Node.js - Enterprise web applications', level: 'Intermediate', duration: '4 months', price: '₹1299' },
          { id: 'mevn', name: 'MEVN Stack', description: 'MongoDB, Express, Vue.js, Node.js - Progressive web apps', level: 'Intermediate', duration: '4 months', price: '₹1299' },
          { id: 'nextjs', name: 'Next.js', description: 'React framework for production-ready applications', level: 'Advanced', duration: '3 months', price: '₹1399' },
        ]
      },
      {
        id: 'app-dev',
        name: 'App Development',
        description: 'Create stunning mobile applications for iOS and Android',
        color: 'bg-gradient-to-br from-pink-50 to-rose-50',
        duration: '4-8 months',
        students: '12,000+',
        rating: 4.7,
        stacks: [
          { id: 'react-native', name: 'React Native', description: 'Cross-platform mobile apps with JavaScript', level: 'Intermediate', duration: '3 months', price: '₹1349' },
          { id: 'flutter', name: 'Flutter', description: 'Google\'s UI toolkit for beautiful native apps', level: 'Intermediate', duration: '3 months', price: '₹1349' },
          { id: 'ionic', name: 'Ionic', description: 'Hybrid mobile apps with web technologies', level: 'Beginner', duration: '2 months', price: '₹1249' },
        ]
      },
      {
        id: 'ai-ml',
        name: 'AI/ML',
        description: 'Master Artificial Intelligence & Machine Learning',
        color: 'bg-gradient-to-br from-green-50 to-emerald-50',
        duration: '8-12 months',
        students: '8,000+',
        rating: 4.9,
        stacks: [
          { id: 'tensorflow', name: 'TensorFlow', description: 'Google\'s powerful machine learning framework', level: 'Advanced', duration: '6 months', price: '₹1499' },
          { id: 'pytorch', name: 'PyTorch', description: 'Facebook\'s flexible deep learning library', level: 'Advanced', duration: '6 months', price: '₹1499' },
          { id: 'scikit', name: 'Scikit-learn', description: 'Simple and efficient machine learning tools', level: 'Beginner', duration: '3 months', price: '₹1299' },
        ]
      }
    ]
  },
  {
    id: 'it',
    name: 'Information Technology',
    icon: Database,
    placeholder:'Information Technology',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      {
        id: 'cloud',
        name: 'Cloud Computing',
        description: 'Master cloud platforms and modern infrastructure',
        color: 'bg-gradient-to-br from-blue-50 to-cyan-50',
        duration: '6-10 months',
        students: '20,000+',
        rating: 4.8,
        stacks: [
          { id: 'aws', name: 'AWS', description: 'Amazon Web Services - Leading cloud platform', level: 'Intermediate', duration: '4 months', price: '₹1399' },
          { id: 'azure', name: 'Azure', description: 'Microsoft Azure - Enterprise cloud solutions', level: 'Intermediate', duration: '4 months', price: '₹1399' },
          { id: 'gcp', name: 'Google Cloud', description: 'Google Cloud Platform - Scalable infrastructure', level: 'Intermediate', duration: '4 months', price: '₹1399' },
        ]
      },
      {
        id: 'devops',
        name: 'DevOps',
        description: 'Bridge development and operations seamlessly',
        color: 'bg-gradient-to-br from-yellow-50 to-orange-50',
        duration: '5-8 months',
        students: '10,000+',
        rating: 4.7,
        stacks: [
          { id: 'docker', name: 'Docker', description: 'Containerization platform for modern apps', level: 'Intermediate', duration: '2 months', price: '₹1249' },
          { id: 'kubernetes', name: 'Kubernetes', description: 'Container orchestration at scale', level: 'Advanced', duration: '4 months', price: '₹1449' },
          { id: 'jenkins', name: 'Jenkins', description: 'Continuous integration and deployment', level: 'Intermediate', duration: '3 months', price: '₹1299' },
        ]
      }
    ]
  },
  {
    id: 'ece',
    name: 'Electronics & Communication',
    icon: Cpu,
    placeholder:'Electronics & Communication',
    color: 'from-green-500 to-teal-500',
    technologies: [
      {
        id: 'embedded',
        name: 'Embedded Systems',
        description: 'Hardware-software integration and IoT development',
        color: 'bg-gradient-to-br from-purple-50 to-indigo-50',
        duration: '6-10 months',
        students: '5,000+',
        rating: 4.6,
        stacks: [
          { id: 'arduino', name: 'Arduino', description: 'Open-source electronics prototyping platform', level: 'Beginner', duration: '2 months', price: '₹1199' },
          { id: 'raspberry-pi', name: 'Raspberry Pi', description: 'Single-board computer programming', level: 'Beginner', duration: '2 months', price: '₹1199' },
          { id: 'arm', name: 'ARM Programming', description: 'Advanced microcontroller programming', level: 'Advanced', duration: '4 months', price: '₹1399' },
        ]
      },
      {
        id: 'iot',
        name: 'Internet of Things',
        description: 'Connected devices and smart sensor networks',
        color: 'bg-gradient-to-br from-teal-50 to-green-50',
        duration: '4-6 months',
        students: '3,000+',
        rating: 4.5,
        stacks: [
          { id: 'esp32', name: 'ESP32', description: 'WiFi & Bluetooth microcontroller development', level: 'Intermediate', duration: '3 months', price: '₹1249' },
          { id: 'mqtt', name: 'MQTT', description: 'IoT messaging protocol implementation', level: 'Intermediate', duration: '2 months', price: '₹1199' },
        ]
      }
    ]
  },
  {
    id: 'eee',
    name: 'Electrical Engineering',
    icon: Zap,
    placeholder:'Electrical Engineering',
    color: 'from-yellow-500 to-orange-500',
    technologies: [
      {
        id: 'power',
        name: 'Industrial Electrical Systems',
        description: 'Electrical power generation and smart grid technology',
        color: 'bg-gradient-to-br from-orange-50 to-red-50',
        duration: '8-12 months',
        students: '4,000+',
        rating: 4.4,
        stacks: [
          { id: 'matlab', name: 'MATLAB/Simulink', description: 'Power system modeling and simulation', level: 'Intermediate', duration: '4 months', price: '₹1449' },
          { id: 'etap', name: 'ETAP', description: 'Electrical power system analysis software', level: 'Advanced', duration: '6 months', price: '₹1599' },
        ]
      },
      {
        id: 'control',
        name: 'Industrial Automation',
        description: 'Industrial automation and process control',
        color: 'bg-gradient-to-br from-red-50 to-pink-50',
        duration: '6-8 months',
        students: '3,500+',
        rating: 4.3,
        stacks: [
          { id: 'plc', name: 'PLC Programming', description: 'Industrial automation and control systems', level: 'Intermediate', duration: '4 months', price: '₹1399' },
          { id: 'scada', name: 'SCADA', description: 'Supervisory control and data acquisition', level: 'Advanced', duration: '5 months', price: '₹1499' },
        ]
      }
    ]
  }
];

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(courses[0]); // Default to Computer Science
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [selectedStack, setSelectedStack] = useState<Stack | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const dispatch = useAppDispatch();
  const enrollState = useAppSelector((state: any) => state.enroll);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setSelectedTechnology(null);
  };

  const handleTechnologySelect = (technology: Technology) => {
    setSelectedTechnology(technology);
  };

  const handleBack = () => {
    if (selectedTechnology) {
      setSelectedTechnology(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };

  
  const handleEnrollClick = (stack: Stack) => {
    setSelectedStack(stack);
    setShowEnrollForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStack && selectedTechnology) {
      dispatch(submitEnrollment({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: {
          name: selectedTechnology.name,
          stack: selectedStack.name,
          price: selectedStack.price,
          duration: selectedStack.duration,
          level: selectedStack.level
        }
      }));
    }
  };

  useEffect(() => {
    if (enrollState.success) {
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => {
        setShowEnrollForm(false);
        dispatch(resetEnrollState());
      }, 2000);
    }
  }, [enrollState.success, dispatch]);


  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
          <div className={`transform transition-all duration-1000 ₹1{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular <span className="text-red-600">Courses</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of courses designed to advance your career and master cutting-edge technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px]">
          {/* Left Sidebar - Circular Navigation */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Search */}
            <div className={`relative mb-8 transform transition-all duration-700 $1{isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
              />
            </div>

   {/* Circular Navigation */}
<div className="flex-1 flex items-center justify-center">
  <div
    className={`relative w-[360px] h-[360px] transform transition-all duration-1000 ₹1{
      isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
    }`}
    style={{ transitionDelay: '300ms' }}
  >
    {/* Outer Ring */}
    <div className="w-full h-full absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border-2 border-white/20 shadow-2xl"></div>

    {/* Course Buttons */}
    {courses.map((course, index) => {
      const angle = (index * 360) / courses.length - 90;
      const radian = (angle * Math.PI) / 180;
      const radius = 120;
      const x = Math.cos(radian) * radius;
      const y = Math.sin(radian) * radius;
      const Icon = course.icon;

      return (
        <React.Fragment key={course.id}>
       
      {/* Divider Line from center to each button */}
      {/* <div
        className="absolute w-px bg-gray-300 z-0"
        style={{
          height: `₹1{radius + 20}px`,
          transformOrigin: 'top center',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -100%) rotate(₹1{angle + 90}deg)`
        }}
      /> */}

      {/* Button with Icon + Text Below */}
      <button
        onClick={() => handleCourseSelect(course)}
        className="absolute w-20 h-24 flex flex-col items-center justify-start z-10"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: 'translate(-50%, -50%)'
        }}
        title={course.name}
      >
        <div className={`w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center ${
          selectedCourse?.id === course.id 
            ? `bg-gradient-to-br ${course.color} ring-4 ring-white/50 shadow-xl` 
            : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-red-300 hover:shadow-xl'
        }`}>
          <Icon className={`w-8 h-8 transition-colors duration-300 ${
            selectedCourse?.id === course.id ? 'text-white' : 'text-gray-600 group-hover:text-red-600'
          }`} />
        </div>

        {/* Text below the icon */}
        <span className="mt-1 text-xs font-medium text-gray-700 text-center">
          {course.placeholder || course.name}
        </span>
      </button>
    </React.Fragment>
  );
})}

                
                {/* Center Circle */}
                <div className="absolute inset-1/2 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg z-5">
                  <span className="text-white font-bold text-sm">Courses</span>
                </div>

                {/* Connecting Lines */}
                {selectedCourse && (
                  <div className="absolute inset-0 pointer-events-none">
                    {courses.map((course, index) => {
                      if (course.id !== selectedCourse.id) return null;
                      
                      const angle = (index * 360) / courses.length - 90;
                      const radius = 120;
                      
                      return (
                        <div
                          key={`line-${course.id}`}
                          className="absolute w-0.5 bg-gradient-to-r from-red-500 to-orange-500 opacity-50"
                          style={{
                            left: '50%',
                            top: '50%',
                            height: `${radius - 40}px`,
                            transformOrigin: 'top center',
                            transform: `rotate(${angle+270}deg) translateX(-50%)`,
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Selected Course Info */}
            {selectedCourse && (
              <div className={`mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm transform transition-all duration-700 ₹1{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${selectedCourse.color} flex items-center justify-center`}>
                    <selectedCourse.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selectedCourse.name}</h3>
                    <p className="text-gray-600 text-sm">{selectedCourse.technologies.length} specializations available</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8">
            {!selectedCourse ? (
              // Welcome Screen
              <div className="h-full flex items-center justify-center">
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <Book className="w-16 h-16 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h3>
                  <p className="text-gray-600 text-lg max-w-md mx-auto">
                    Select a course from the circular menu to explore technologies and start your journey.
                  </p>
                </div>
              </div>
            ) : !selectedTechnology ? (
              // Technologies Grid
              <div className="space-y-6">
                {/* Course Header */}
                <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedCourse.color} flex items-center justify-center`}>
                      <selectedCourse.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedCourse.name}</h2>
                      <p className="text-gray-600">Choose your specialization</p>
                    </div>
                  </div>
                </div>
                
                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedCourse.technologies.map((tech, index) => (
                    <button
                      key={tech.id}
                      onClick={() => handleTechnologySelect(tech)}
                      className={`p-6 ${tech.color} rounded-xl border border-gray-200 border-red-300 transition-all duration-300 shadow-2xl text-left group transform translate-y-2 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 150}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {tech.name}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{tech.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{tech.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{tech.students}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{tech.rating}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{tech.stacks.length} learning paths</span>
                          <div className="flex space-x-1">
                            {tech.stacks.slice(0, 3).map((_, i) => (
                              <div key={i} className="w-2 h-2 rounded-full bg-red-400"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Stacks Detail View
              <div className="space-y-6">
                {/* Back Button & Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-300 p-2 rounded-lg hover:bg-red-50"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Technologies</span>
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedTechnology.name}</h2>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-700">{selectedTechnology.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{selectedTechnology.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedTechnology.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{selectedTechnology.students} enrolled</span>
                    </div>
                  </div>
                </div>

                {/* Learning Paths */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedTechnology.stacks.map((stack) => (
                    <div
                      key={stack.id}
                      className="bg-white p-6 rounded-xl border border-gray-200 border-red-300 shadow-lg transition-all duration-300 transform translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{stack.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(stack.level)}`}>
                          {stack.level}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{stack.description}</p>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{stack.duration}</span>
                        </div>
                        <div className="text-lg font-bold text-red-600">{stack.price}</div>
                      </div>
                      
                       <button 
    onClick={() => handleEnrollClick(stack)}
    className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
  >
    Enroll Now
  </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

   {showEnrollForm && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative transform transition-all duration-300 scale-95 animate-scaleIn">
        <button 
          onClick={() => {
            setShowEnrollForm(false);
            dispatch(resetEnrollState());
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enroll in {selectedStack?.name}</h3>
        <p className="text-gray-600 mb-6">
          {selectedTechnology?.name} - {selectedStack?.duration} • {selectedStack?.price}
        </p>
        
        {enrollState.success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Enrollment Successful!</h4>
            <p className="text-gray-600">We've sent the details to your email.</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              {enrollState.error && (
                <div className="text-red-500 text-sm">{enrollState.error}</div>
              )}
              
              <button
                type="submit"
                disabled={enrollState.loading}
                className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg text-white font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {enrollState.loading ? 'Processing...' : 'Complete Enrollment'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )}
    </section>
  );
}

export default Courses;