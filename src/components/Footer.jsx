import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CourseHub. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex space-x-6 text-sm">
            <Link
              to="/"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              Courses
            </Link>
            <Link
              to="/add"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              Add Course
            </Link>
            <Link
              to="/login"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
