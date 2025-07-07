import { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, Grid3X3, ChevronDown } from 'lucide-react';
import CoursesDropdown from './CoursesDropdown';
import logo from '../../assets/uptech.png';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  setSelectedCategory: (category: string) => void;
}

interface HeaderProps {
  setSelectedCategory: (category: string) => void;
}

const Header = ({ setSelectedCategory }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const coursesRef = useRef<HTMLDivElement>(null);
  const mobileCoursesRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
      if (mobileCoursesRef.current && !mobileCoursesRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);


 
  const handleCategorySelect = (category: string, courseId?: number) => {
    const categoryMap: Record<string, string> = {
      'CS-IT': 'cs-it',
      'Electronics': 'electronics',
      'Machine Design': 'machine-design',
      'Other': 'other'
    };

    const mappedCategory = categoryMap[category] || 'cs-it';
    setSelectedCategory(mappedCategory);
    setIsMenuOpen(false);
    setIsCoursesOpen(false);

    if (courseId) {
      navigate(`/courses#course-${courseId}`);
      // Scroll to course after navigation
      setTimeout(() => {
        const element = document.getElementById(`course-${courseId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate('/courses');
    }
  };
  // const handleSearch = () => {
  //   if (searchQuery.trim()) {
  //     navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 w-auto mr-2" />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400"  />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition">About Us</Link>

            <div className="relative" ref={coursesRef}>
              <button
                onClick={toggleCourses}
                className="flex items-center text-gray-700 hover:text-red-600 transition group"
              >
                <Grid3X3 className="h-4 w-4 mr-1" />
                <span className="font-medium">Courses</span>
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              <CoursesDropdown
                isOpen={isCoursesOpen}
                onClose={() => setIsCoursesOpen(false)}
                onCategorySelect={handleCategorySelect}
              />
            </div>

            <Link to="/consultancy" className="text-gray-700 hover:text-red-600 transition">
              Engineering Consultancy
            </Link>

            <Link to="/contact">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
                Contact
              </button>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-1">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-red-600 font-medium"
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-red-600 font-medium"
              >
                About Us
              </Link>

                 <div className="relative" ref={mobileCoursesRef}>
              <button
                onClick={toggleCourses}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-red-600 font-medium"
              >
                <div className="flex items-center">
                  <Grid3X3 className="h-4 w-4 mr-2" />
                  <span>Courses</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Courses Dropdown */}
              {isCoursesOpen && (
                <div className="mt-2">
                  <CoursesDropdown
                    isOpen={isCoursesOpen}
                    onClose={() => {
                      setIsCoursesOpen(false);
                      setIsMenuOpen(false);
                    }}
                    onCategorySelect={handleCategorySelect}
                    mobileView={true}
                  />
                </div>
              )}
            </div>

              <Link 
                to="/consultancy" 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-red-600 font-medium"
              >
                Engineering Consultancy
              </Link>
            </div>

            <div className="pt-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-orange-700 transition-all shadow-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;