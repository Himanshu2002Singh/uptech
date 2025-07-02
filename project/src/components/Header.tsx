import { useState } from 'react';
import { Search, Menu, X, Grid3X3, ChevronDown } from 'lucide-react';
import CoursesDropdown from './CoursesDropdown';
import logo from '../../assets/uptech.png'; // Adjust the path as necessary
import { Link, useNavigate } from 'react-router';
interface HeaderProps {
  setSelectedCategory: (category: string) => void;
}

const Header = ({ setSelectedCategory }: HeaderProps) => { // Added type annotation
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);
    const navigate = useNavigate(); // Get the navigate function

 // Update the handleCategorySelect function in Header.tsx


 type CategoryKey = 'CS-IT' | 'Electronics' | 'Machine Design' | 'Other';

 const handleCategorySelect = (category: string, courseId?: number) => {
    const categoryMap: Record<CategoryKey, string> = {
      'CS-IT': 'cs-it',
      'Electronics': 'electronics',
      'Machine Design': 'machine-design',
      'Other': 'other'
    };

    const mappedCategory = (categoryMap as Record<string, string>)[category] || 'cs-it';
    setSelectedCategory(mappedCategory);
    
    if (courseId) {
      navigate(`/courses#course-${courseId}`);
    } else {
      navigate('/courses');
    }
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
             
                <img src={logo} alt="Logo" className="h-14 w-auto mr-2" />
              
              {/* <div className="ml-2">
                <div className="text-xs text-gray-600 leading-tight">Automation</div>
              </div> */}
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
             Home
            </Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              About Us
            </Link>
            <div className="relative">
              <button
                onClick={toggleCourses}
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                <Grid3X3 className="h-4 w-4 mr-1" />
                Courses
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
               <CoursesDropdown 
        isOpen={isCoursesOpen} 
        onClose={() => setIsCoursesOpen(false)} 
        onCategorySelect={handleCategorySelect} 
      />
            </div>
           
           
            <Link to='/cunsultancy' className="text-gray-700 hover:text-red-600 transition-colors duration-200">
              Engineering Consultancy 
            </Link>
            <Link to='/contact'>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Contact
            </button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button
              onClick={toggleCourses}
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50"
            >
              <Grid3X3 className="h-4 w-4 mr-2" />
              Courses
              <ChevronDown className="h-4 w-4 ml-auto" />
            </button>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50">
              Corporate Training
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50">
              Trainings
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50">
              Resource
            </a>
            <button className="w-full mt-4 mx-3 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;