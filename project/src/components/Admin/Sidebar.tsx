import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaUsers, FaQuoteLeft, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice'; // <-- path apne project ke hisab se update karo

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());  // Redux logout call
    navigate('/login');  // Login page redirect
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                  location.pathname === '/dashboard' ? 'bg-gray-700' : ''
                }`}
              >
                <FaHome className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/courses"
                className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                  location.pathname.startsWith('/admin/courses') ? 'bg-gray-700' : ''
                }`}
              >
                <FaBook className="mr-2" /> Courses
              </Link>
            </li>
            <li>
              <Link
                to="/admin/testimonials"
                className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                  location.pathname.startsWith('/admin/testimonials') ? 'bg-gray-700' : ''
                }`}
              >
                <FaQuoteLeft className="mr-2" /> Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/admin/team"
                className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                  location.pathname.startsWith('/admin/team') ? 'bg-gray-700' : ''
                }`}
              >
                <FaUsers className="mr-2" /> Team Members
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ✅ Logout button bottom पर */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-2 rounded bg-red-600 hover:bg-red-700"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
