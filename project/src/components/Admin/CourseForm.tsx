import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createCourse, updateCourse, resetCourseState, fetchCourseById } from '../redux/slices/courseSlice';
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from '../redux/store';
import AdminLayout from './AdminLayout';

interface CourseFormData {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  downloadlink: string;
  price: string;
  category: string;
  syllabus: string[];
  what_you_learn: string[];
  prerequisites: string[];
  certification: string;
}

const CourseForm = () => {
  const [formData, setFormData] = useState<CourseFormData>({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    students: 0,
    rating: 0,
    image: '',
    downloadlink:'',
    price: '',
    category: '',
    syllabus: [],
    what_you_learn: [],
    prerequisites: [],
    certification: ''
  });

  const { selectedCourse, loading, error, success } = useSelector((state: RootState) => state.course);
  const [syllabusItem, setSyllabusItem] = useState('');
  const [whatYouLearnItem, setWhatYouLearnItem] = useState('');
  const [prerequisitesItem, setPrerequisitesItem] = useState('');

  const { id } = useParams<{ id?: string }>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
    }
    return () => {
      dispatch(resetCourseState());
    };
  }, [id, dispatch]);

  // Update the useEffect that sets the form data from selectedCourse
useEffect(() => {
  if (selectedCourse && id) {
    setFormData({
      title: selectedCourse.title || '',
      description: selectedCourse.description || '',
      instructor: selectedCourse.instructor || '',
      duration: selectedCourse.duration || '',
      students: selectedCourse.students || 0,
      rating: selectedCourse.rating || 0,
      image: selectedCourse.image || '',
      downloadlink: selectedCourse.downloadlink||'',
      price: selectedCourse.price || '',
      category: selectedCourse.category || '',
      syllabus: Array.isArray(selectedCourse.syllabus) ? selectedCourse.syllabus : [],
      what_you_learn: Array.isArray(selectedCourse.what_you_learn) ? selectedCourse.what_you_learn : [],
      prerequisites: Array.isArray(selectedCourse.prerequisites) ? selectedCourse.prerequisites : [],
      certification: selectedCourse.certification || '',
    });
  }
}, [selectedCourse, id]);


  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(id ? 'Course updated successfully' : 'Course created successfully');
      navigate('/admin/courses');
      dispatch(resetCourseState());
    }
  }, [error, success, navigate, dispatch, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const addSyllabusItem = () => {
    if (syllabusItem.trim()) {
      setFormData({
        ...formData,
        syllabus: [...formData.syllabus, syllabusItem.trim()]
      });
      setSyllabusItem('');
    }
  };

  const removeSyllabusItem = (index: number) => {
    setFormData({
      ...formData,
      syllabus: formData.syllabus.filter((_, i) => i !== index)
    });
  };

  const addWhatYouLearnItem = () => {
    if (whatYouLearnItem.trim()) {
      setFormData({
        ...formData,
        what_you_learn: [...formData.what_you_learn, whatYouLearnItem.trim()]
      });
      setWhatYouLearnItem('');
    }
  };

  const removeWhatYouLearnItem = (index: number) => {
    setFormData({
      ...formData,
      what_you_learn: formData.what_you_learn.filter((_, i) => i !== index)
    });
  };

  const addPrerequisitesItem = () => {
    if (prerequisitesItem.trim()) {
      setFormData({
        ...formData,
        prerequisites: [...formData.prerequisites, prerequisitesItem.trim()]
      });
      setPrerequisitesItem('');
    }
  };

  const removePrerequisitesItem = (index: number) => {
    setFormData({
      ...formData,
      prerequisites: formData.prerequisites.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(updateCourse({ id, courseData: formData }));
    } else {
      dispatch(createCourse(formData));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">{id ? 'Edit Course' : 'Add New Course'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instructor</label>
                <input
                  type="text"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Students</label>
                <input
                  type="number"
                  name="students"
                  value={formData.students}
                  onChange={handleNumberChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleNumberChange}
                  min="0"
                  max="5"
                  step="0.1"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
          </div>

          <div>
                <label className="block text-sm font-medium text-gray-700">download URL</label>
                <input
                  type="text"
                  name="downloadlink"
                  value={formData.downloadlink}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

          {/* Syllabus */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Syllabus</label>
            <div className="mt-2 flex">
              <input
                type="text"
                value={syllabusItem}
                onChange={(e) => setSyllabusItem(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Add syllabus item"
              />
              <button
                type="button"
                onClick={addSyllabusItem}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {formData.syllabus.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-1">
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => removeSyllabusItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">What You'll Learn</label>
            <div className="mt-2 flex">
              <input
                type="text"
                value={whatYouLearnItem}
                onChange={(e) => setWhatYouLearnItem(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Add learning point"
              />
              <button
                type="button"
                onClick={addWhatYouLearnItem}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {formData.what_you_learn.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-1">
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => removeWhatYouLearnItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Prerequisites</label>
            <div className="mt-2 flex">
              <input
                type="text"
                value={prerequisitesItem}
                onChange={(e) => setPrerequisitesItem(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Add prerequisite"
              />
              <button
                type="button"
                onClick={addPrerequisitesItem}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add
              </button>
            </div>
            <div className="mt-2">
              {formData.prerequisites.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-1">
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => removePrerequisitesItem(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Certification</label>
            <textarea
              name="certification"
              value={formData.certification}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : id ? 'Update Course' : 'Add Course'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CourseForm;