import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Course {
  id: string | number;
  title: string;
  duration: string;
  price: string;
}

interface CategorySidebarProps {
  selectedCategory: string;
  courses: Course[];
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ selectedCategory, courses }) => {
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
    <div className="w-full lg:w-80 bg-slate-800 text-white p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-orange-400">
          {getCategoryTitle(selectedCategory)}
        </h2>
        <p className="text-gray-300 text-sm">
          {courses.length} courses available in this category
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wide">
          Available Courses
        </h3>
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <h4 className="text-sm font-medium text-white mb-1">
                {course.title}
              </h4>
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.price}</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-orange-500 rounded-lg">
        <h3 className="font-semibold mb-2">Need Help Choosing?</h3>
        <p className="text-sm text-orange-100 mb-3">
          Get personalized course recommendations based on your goals.
        </p>
        <button className="w-full bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
          Get Guidance
        </button>
      </div>
    </div>
  );
};

export default CategorySidebar;