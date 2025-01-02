import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6A38C2] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to helping you find your dream job. Join us to
              explore new opportunities and take your career to the next level.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">Email: support@platform.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links Section */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-200">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div className="text-center text-sm mt-8">
          <p>&copy; 2025 Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
