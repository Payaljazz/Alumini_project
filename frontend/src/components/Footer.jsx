import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Alumni Connect</h2>
          <p className="text-gray-600 text-sm">
            Building a bridge between alumni, students, and the institution.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Events</li>
            <li className="hover:text-blue-600 cursor-pointer">Jobs</li>
            <li className="hover:text-blue-600 cursor-pointer">Alumni</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Connect</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li>Email: latakumarisingh5574@gmail.com</li>
            <li>Phone: +91 9608301824</li>
            <li>Location: GL Bajaj Institute of Technology and Management</li>
          </ul>
        </div>

      </div>

      <div className="text-center py-4 border-t text-sm text-gray-600">
        © {new Date().getFullYear()} Alumni Connect — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
