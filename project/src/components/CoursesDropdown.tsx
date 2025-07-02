import React, { useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../components/redux/hooks'; // Make sure you have these hooks
import { getCourses } from '../components/redux/slices/courseSlice';

import { Course } from '../types'; // Adjust the path


interface CoursesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onCategorySelect: (category: string, courseId?: number) => void;
}

const CoursesDropdown: React.FC<CoursesDropdownProps> = ({
  isOpen,
  onClose,
  onCategorySelect,
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
    onClose();
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
      className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-xl border border-gray-200 z-50 transform -translate-x-1/2 ml-32"
    >
      <div className="p-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading courses...</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
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
                        className="block w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-md transition-all duration-200 text-sm"
                      >
                        {course}
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">No courses</p>
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
