import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchTeamMemberById, updateTeamMember } from '../redux/slices/teamSlice';
import { TeamMember } from '../../types';
import { toast } from 'react-toastify';
import AdminLayout from './AdminLayout';

const TeamEditForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedMember, loading, error } = useAppSelector((state) => state.team);

  const [formData, setFormData] = useState<TeamMember>({
    id: 0,
    name: '',
    title: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchTeamMemberById(Number(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedMember) {
      setFormData(selectedMember);
    }
  }, [selectedMember]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: formData.id,
      updatedData: {
        name: formData.name,
        title: formData.title,
        description: formData.description,
        image: formData.image
      }
    };

    const res: any = await dispatch(updateTeamMember(payload));
    if (!res.error) {
      toast.success('Team member updated successfully!');
      navigate('/admin/team');
    }
  };

  return (
    <AdminLayout>
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-red-400 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-red-400 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-red-400 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md shadow-sm"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded"
          >
            {loading ? 'Updating...' : 'Update Member'}
          </button>
        </div>
      </form>
    </div>
    </AdminLayout>
  );
};

export default TeamEditForm;
