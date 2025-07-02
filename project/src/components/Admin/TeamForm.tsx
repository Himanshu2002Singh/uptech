import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createTeamMember } from '../redux/slices/teamSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const TeamForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.team);

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(createTeamMember(formData)).unwrap();
      toast.success('Team member created successfully!');
      navigate('/admin/team'); // Optional: Redirect after creation
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      toast.error(errorMessage);
    }
  };

  return (
     <AdminLayout>
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Saving...' : 'Create Team Member'}
        </button>
      </form>
    </div>
    </AdminLayout>
  );
};

export default TeamForm;
