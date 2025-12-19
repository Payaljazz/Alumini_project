import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-16">

      {/* HERO SECTION */}
      <section className="w-7xl bg-gradient-to-r bg-blue-500 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Alumni <span className="text-yellow-300">Connect</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white">
            Bridging Alumni, Students & Institutions
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              to="/signup"
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition"
            >
              Join Now
            </Link>

            <Link
              to="/alumni"
              className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition"
            >
              Explore Alumni
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-8xl bg-blue-100 mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <FeatureCard
            title="Alumni Network"
            desc="Connect with alumni across batches, courses, and industries."
            emoji="🤝"
          />

          <FeatureCard
            title="Events & Reunions"
            desc="Stay updated with seminars, workshops, and alumni meets."
            emoji="🎉"
          />

          <FeatureCard
            title="Jobs & Mentorship"
            desc="Access job opportunities and guidance from alumni."
            emoji="💼"
          />

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r bg-blue-500 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">

          <h2 className="text-3xl font-bold">
            Be a Part of Alumni Connect
          </h2>

          <p className="text-blue-100 mt-3">
            Join today and grow with your alumni community.
          </p>

          <Link
            to="/signup"
            className="mt-6 inline-block px-10 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-blue-50 transition"
          >
            Get Started
          </Link>

        </div>
      </section>

    </div>
  );
}

function FeatureCard({ title, desc, emoji }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold text-indigo-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </div>
  );
}

export default Home;
