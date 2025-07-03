import React from "react";
import {
 
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-orange-500 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get  <span className="text-red-600">In Touch</span>
            </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We'll create high-quality linkable content and build at least 40 high-authority links to each 
          asset, paving the way for you to grow your rankings, improve brand.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-200 to-orange-500 text-black p-8 rounded-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -bottom-10 -right-3 w-32 h-32 bg-purple-500 rounded-full opacity-30"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-purple-500 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-teal-100 mb-8 leading-relaxed">
                We'll create high-quality linkable content and 
                build at least 40 high-authority 
                links to each asset.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-medium">+91 7303050391</p>
                    <p className="text-">+91 7303050391</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-5 h-5 text-white" />
                  <p className="font-medium">advisory@uptechautomation.com</p>
                </div>

                <div className="flex items-center space-x-4">
                  <FaGlobe className="w-5 h-5 text-white" />
                  <p className="font-medium">B-135 ,Sector 2 Noida, Uttar Pradesh </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-600">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="John Trangely"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="info@thenuency.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Your Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="I want to hire you quickly"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                placeholder="Write here your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;