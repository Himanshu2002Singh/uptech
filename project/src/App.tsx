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
import ZoomLoader from './ZoomLoader';
function App() {
  const [selectedCategory, setSelectedCategory] = useState('cs-it');
  

  return (
    <>
    <ZoomLoader/>
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
           <Route element={<ProtectedRoute adminOnly />}>
          <Route path="/admin/courses" element={ <CoursesPage />} />
          <Route path='/dashboard' element={<CoursesPage />} />
          <Route path="/admin/courses/add" element={<CourseForm />} />
          <Route path="/admin/team" element={<TeamPage />} />
<Route path="/admin/team/create" element={<TeamForm />} />
<Route path="/admin/team/edit/:id" element={<TeamEditForm />} />
          <Route path="/admin/courses/edit/:id" element={<CourseForm />} />
          <Route path="/admin/testimonials" element={<TestimonialList />} />
<Route path="/admin/testimonials/add" element={<TestimonialForm />} />
<Route path="/admin/testimonials/edit/:id" element={<TestimonialForm />} />
</Route>
        </Routes>

        <Footer />
        <WhatsAppChat />
      </div>
    </Provider>
    </>
  );
}

export default App;
