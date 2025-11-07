import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-20">

      
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Alumni Connect
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100">
            Bridging the gap between Alumni, Students, and Institutions.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/signup"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
            >
              Join Now
            </Link>
            <Link
              to="/alumni"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition"
            >
              Explore Alumni
            </Link>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Alumni Network</h3>
            <p className="text-gray-600">
              Connect with alumni across batches, courses, and industries.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Events & Reunions</h3>
            <p className="text-gray-600">
              Stay updated with seminars, workshops, and alumni reunions.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Job & Career Portal</h3>
            <p className="text-gray-600">
              Access job opportunities and mentorship from alumni.
            </p>
          </div>

        </div>
      </section>

     
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600">Be a Part of the Community</h2>
          <p className="text-gray-600 mt-3">
            Join our platform and contribute to the growth of your institution.
          </p>

          <Link
            to="/signup"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
