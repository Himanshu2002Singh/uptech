import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../components/redux/slices/courseSlice';
import { RootState, AppDispatch } from '../components/redux/store';

import CategorySidebar from './CategorySidebar';
import { useLocation } from 'react-router';
  import { Course } from '../types';
import DetailedCourseCard from './DetailedCourseCard';


interface CoursesPageProps {
  selectedCategory: string;
}



function CoursesPage({ selectedCategory }: CoursesPageProps) {
  const dispatch = useDispatch<AppDispatch>();
  // Import the shared Course type

  const { courses = [] } = useSelector((state: RootState) => state.course || {}) as { courses: Course[] };

  
  const location = useLocation();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  useEffect(() => {
    if (!location.hash) return;

    const scrollToCourse = () => {
      const courseId = location.hash.substring(1);
      const el = document.getElementById(courseId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight-course');
        setTimeout(() => {
          el.classList.remove('highlight-course');
        }, 2000);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(scrollToCourse);
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.hash, courses]);

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'cs-it': return 'CS-IT Courses';
      case 'electronics': return 'Electronics & Industrial Automation';
      case 'machine-design': return 'Machine Designing & Drafting';
      case 'other': return 'Other Courses';
      default: return 'All Courses';
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {getCategoryTitle(selectedCategory)}
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive courses with detailed syllabus and expert instruction
              </p>
              <div className="mt-6 flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Industry Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Hands-on Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Certificate Provided</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Students learning"
                className="w-80 h-48 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <CategorySidebar
              selectedCategory={selectedCategory}
              courses={filteredCourses}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {getCategoryTitle(selectedCategory)} ({filteredCourses.length} courses)
                </h2>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Sort by Popularity</option>
                    <option>Sort by Rating</option>
                    <option>Sort by Price</option>
                    <option>Sort by Duration</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Detailed Courses */}
            <div className="space-y-8">
             {filteredCourses.map((course) => (
          <DetailedCourseCard key={course.id} {...course} />

        ))}
            </div>

            {/* Load More Button */}
            {filteredCourses.length > 0 && (
              <div className="mt-12 text-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Courses
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default CoursesPage;