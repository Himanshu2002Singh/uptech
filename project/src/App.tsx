import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import ProtectedRoute from './ProtectedRoute';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './AboutUs/About';
import Coursespage from './Courses/CoursePage';
import WhatsAppChat from './components/WhatsAppChat';
import ContactUs from './components/Contactus';

import CourseForm from './components/Admin/CourseForm';
import CoursesPage from './components/Page/admin/Courses';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FreeConsultancyPage from './Consultancy/Counsltancy';
import TeamForm from './components/Admin/TeamForm';

import TeamPage from './components/Page/admin/TeamPage';
import TeamEditForm from './components/Admin/TeamEditForm';
import TestimonialForm from './components/Admin/TestimonialForm';
import TestimonialList from './components/Admin/TestimonialList';
import Login from './components/Page/admin/Login';
import ForgotPassword from './components/Page/admin/ForgotPassword';
function App() {
  const [selectedCategory, setSelectedCategory] = useState('cs-it');
  

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        {/* Header with category setter */}
        <Header setSelectedCategory={setSelectedCategory} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/courses"
            element={<Coursespage selectedCategory={selectedCategory} />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/consultancy' element={<FreeConsultancyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />

          {/* Admin Routes */}
          <Route path="/admin/courses" element={ <ProtectedRoute><CoursesPage /></ProtectedRoute>} />
          <Route path='/dashboard' element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
          <Route path="/admin/courses/add" element={<ProtectedRoute><CourseForm /></ProtectedRoute>} />
          <Route path="/admin/team" element={<ProtectedRoute><TeamPage /></ProtectedRoute>} />
<Route path="/admin/team/create" element={<ProtectedRoute><TeamForm /></ProtectedRoute>} />
<Route path="/admin/team/edit/:id" element={<ProtectedRoute><TeamEditForm /></ProtectedRoute>} />
          <Route path="/admin/courses/edit/:id" element={<ProtectedRoute><CourseForm /></ProtectedRoute>} />
          <Route path="/admin/testimonials" element={<ProtectedRoute><TestimonialList /></ProtectedRoute>} />
<Route path="/admin/testimonials/add" element={<ProtectedRoute><TestimonialForm /></ProtectedRoute>} />
<Route path="/admin/testimonials/edit/:id" element={<ProtectedRoute><TestimonialForm /></ProtectedRoute>} />
        </Routes>

        <Footer />
        <WhatsAppChat />
      </div>
    </Provider>
  );
}

export default App;
