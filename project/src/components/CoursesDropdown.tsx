import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../components/redux/hooks';
import { getCourses } from '../components/redux/slices/courseSlice';
import { Course } from '../types';
import { ChevronRight } from 'lucide-react';

interface CoursesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onCategorySelect: (category: string, courseId?: number) => void;
  mobileView?: boolean;
}

const CoursesDropdown: React.FC<CoursesDropdownProps> = ({
  isOpen,
  onClose,
  onCategorySelect,
  mobileView = false,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { courses = [], loading } = useAppSelector((state): { courses: Course[]; loading: boolean } => state.course || {});

  useEffect(() => {
    if (isOpen) {
      dispatch(getCourses());
    }
  }, [isOpen, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCourseClick = (courseName: string, category: string) => {
    const course = courses.find(
      (c) =>
        c.title === courseName &&
        c.category.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase().replace(/\s+/g, '-')
    );

    if (course) {
      onCategorySelect(category, course.id);
    } else {
      onCategorySelect(category);
    }
  };

  // Filter courses by categories from backend
  const categorizedCourses: Record<string, string[]> = {
    'CS-IT': [],
    Electronics: [],
    'Machine Design': [],
    Other: [],
  };

  courses.forEach((course) => {
    const cat = course.category.toLowerCase();

    if (cat.includes('cs-it')) {
      categorizedCourses['CS-IT'].push(course.title);
    } else if (cat.includes('electronics')) {
      categorizedCourses['Electronics'].push(course.title);
    } else if (cat.includes('machine')) {
      categorizedCourses['Machine Design'].push(course.title);
    } else {
      categorizedCourses['Other'].push(course.title);
    }
  });

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`${mobileView ? 'w-full' : 'absolute top-full left-0 mt-2 w-screen max-w-6xl transform -translate-x-1/2 ml-32'}`}
    >
      <div className={`bg-white rounded-lg shadow-xl border border-gray-200 z-50 ${mobileView ? '' : 'p-6'}`}>
        {loading ? (
          <p className="text-center text-gray-500 p-4">Loading courses...</p>
        ) : (
          <div className={`grid ${mobileView ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'} gap-6 p-4`}>
            {Object.entries(categorizedCourses).map(([category, courseList]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {category === 'Electronics' ? 'Electronics & Industrial Automation' : category}
                </h3>
                <div className="space-y-1">
                  {courseList.length > 0 ? (
                    courseList.map((course, index) => (
                      <button
                        key={index}
                        onClick={() => handleCourseClick(course, category)}
                        className={`block w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-md transition-all duration-200 ${mobileView ? 'text-base flex items-center justify-between' : 'text-sm'}`}
                      >
                        {course}
                        {mobileView && <ChevronRight className="h-4 w-4 text-gray-400" />}
                      </button>
                    ))
                  ) : (
                    <p className={`text-gray-400 ${mobileView ? 'text-base' : 'text-sm'}`}>No courses</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesDropdown;