import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTestimonials,
  deleteTestimonial,
  resetTestimonialState,
} from '../../components/redux/slices/testimonialSlice';
import { RootState, AppDispatch } from '../../components/redux/store';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { toast } from 'react-toastify';

const TestimonialList = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { testimonials, loading, error } = useSelector(
    (state: RootState) => state.testimonial
  );

  useEffect(() => {
    dispatch(fetchTestimonials());
    dispatch(resetTestimonialState());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      dispatch(deleteTestimonial(id.toString()))
        .unwrap()
        .then(() => {
          toast.success('Testimonial deleted successfully');
          dispatch(fetchTestimonials());
        })
        .catch((err) => toast.error(err));
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Testimonials</h2>
          <button
            onClick={() => navigate('/admin/testimonials/add')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add Testimonial
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : testimonials.length === 0 ? (
          <p>No testimonials found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border">#</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Quote</th>
                  <th className="px-4 py-2 border">Image</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((testimonial: any, index: number) => (
                  <tr key={testimonial.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{testimonial.name}</td>
                    <td className="px-4 py-2 border">{testimonial.role}</td>
                    <td className="px-4 py-2 border max-w-xs truncate">
                      {testimonial.quote}
                    </td>
                    <td className="px-4 py-2 border">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        'No image'
                      )}
                    </td>
                    <td className="px-4 py-2 border space-x-2">
                      <button
                        onClick={() => navigate(`/admin/testimonials/edit/${testimonial.id}`)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default TestimonialList;
