import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTestimonial,
  updateTestimonial,
  fetchTestimonialById,
  resetTestimonialState,
} from '../../components/redux/slices/testimonialSlice';
import { RootState, AppDispatch } from '../../components/redux/store';
import AdminLayout from './AdminLayout';
import { toast } from 'react-toastify';

interface TestimonialFormData {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { selectedTestimonial, loading, success, error } = useSelector(
    (state: RootState) => state.testimonial
  );

  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    role: '',
    image: '',
    quote: '',
  });

  useEffect(() => {
    if (id) dispatch(fetchTestimonialById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedTestimonial && id) {
      setFormData({
        name: selectedTestimonial.name,
        role: selectedTestimonial.role,
        image: selectedTestimonial.image,
        quote: selectedTestimonial.quote,
      });
    }
  }, [selectedTestimonial, id]);

  useEffect(() => {
    if (success) {
      toast.success(id ? 'Testimonial updated!' : 'Testimonial created!');
      dispatch(resetTestimonialState());
      navigate('/admin/testimonials');
    }
    if (error) {
      toast.error(error);
    }
  }, [success, error, dispatch, navigate, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTestimonial({ id, testimonialData: formData }));
    } else {
      dispatch(createTestimonial(formData));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{id ? 'Edit' : 'Add'} Testimonial</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <textarea
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            placeholder="Quote"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Saving...' : id ? 'Update Testimonial' : 'Add Testimonial'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default TestimonialForm;
