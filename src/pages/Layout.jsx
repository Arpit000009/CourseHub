import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
