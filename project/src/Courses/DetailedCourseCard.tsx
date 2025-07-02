import React, { useState } from 'react';
import {
  Download,
  MessageCircle,
  Clock,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Award,
  Target,
} from 'lucide-react';

interface DetailedCourseCardProps {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  price: string;
  syllabus: string[] | string;
  what_you_learn: string[] | string;
  prerequisites: string[] | string;
  certification: string;
}

const DetailedCourseCard: React.FC<DetailedCourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  image,
  price,
  syllabus,
  what_you_learn,
  prerequisites,
  certification,
}) => {
  const [showFullSyllabus, setShowFullSyllabus] = useState(false);
  const [showWhatYouLearn, setShowWhatYouLearn] = useState(false);

  // Helper to parse JSON string if needed
  const parseArray = (input: string[] | string): string[] => {
    try {
      if (Array.isArray(input)) return input;
      if (typeof input === 'string') return JSON.parse(input);
    } catch (e) {
      console.error('Error parsing JSON array:', input, e);
    }
    return [];
  };

  const safeSyllabus = parseArray(syllabus);
  const safeWhatYouLearn = parseArray(what_you_learn);
  const safePrerequisites = parseArray(prerequisites);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div id={`course-${id}`} className="md:flex">
        {/* Course Image */}
        <div className="md:w-1/3">
          <img src={image} alt={title} className="w-full h-64 md:h-full object-cover" />
        </div>

        {/* Course Content */}
        <div className="md:w-2/3 p-8">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
              </div>
              <div className="ml-4 text-right">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                  ₹{price}
                </div>
                <div className="flex items-center justify-end space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-yellow-600 font-medium">{rating}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{students} students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>{certification}</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                {instructor.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">Instructor: {instructor}</p>
                <p className="text-sm text-gray-600">Industry Expert</p>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mb-6">
              <button
                onClick={() => setShowWhatYouLearn(!showWhatYouLearn)}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-orange-500" />
                  What You'll Learn
                </h4>
                {showWhatYouLearn ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {showWhatYouLearn && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {safeWhatYouLearn.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Syllabus */}
            <div className="mb-6">
              <button
                onClick={() => setShowFullSyllabus(!showFullSyllabus)}
                className="flex items-center justify-between w-full text-left mb-3"
              >
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-orange-500" />
                  Course Syllabus
                </h4>
                {showFullSyllabus ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {showFullSyllabus && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {safeSyllabus.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Prerequisites */}
            {safePrerequisites.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h4>
                <div className="bg-blue-50 rounded-lg p-4">
                  <ul className="space-y-1">
                    {safePrerequisites.map((req, index) => (
                      <li key={index} className="text-blue-800 text-sm">• {req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Send Inquiry</span>
              </button>
              <button className="flex-1 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Syllabus</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCourseCard;
