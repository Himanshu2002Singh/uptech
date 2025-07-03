import React from "react";
import { FaFacebookF, FaTwitter, FaBehance, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import logo from "../../assets/uptech-white.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-15 h-14 mr-3" />
            </div>
          </div>
          <br></br>
          <p className="text-sm text-gray-400 mb-4">
            Unleash innovations to upgrade your tech solution
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-[#2f2f2f] p-2 rounded"><FaFacebookF /></a>
            <a href="#" className="bg-[#2f2f2f] p-2 rounded"><FaTwitter /></a>
            <a href="#" className="bg-[#2f2f2f] p-2 rounded"><FaBehance /></a>
            <a href="#" className="bg-[#2f2f2f] p-2 rounded"><FaGooglePlusG /></a>
            <a href="#" className="bg-[#2f2f2f] p-2 rounded"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300">
            {[
              "CS-IT", "Electronics", "AI-ML", "Industry Automation","Other Courses","Engineering Consultancy", 
                       ].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our mailing list to receives daily updates direct to your inbox!
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-2 text-black rounded-l-sm"
            />
            <button className="bg-red-600 px-4 text-white font-semibold rounded-r-sm">
              SIGN UP
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">*we hate spam as much as you do</p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="max-w-7xl mx-auto text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2025 <span className="text-red-400 font-bold text-xl">Uptech Automation </span></p>
        <p> Degine and Developement By <span className="text-red-600" >Trusting Brains</span></p>
        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Privacy & Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
