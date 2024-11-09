import React from "react";

const steps = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 p-8 bg-gradient-to-b from-blue-50 to-white cursor-default">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 animate-pulse">
          How It Works
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Follow these simple steps to get started with Schedulrr and simplify
          your scheduling process.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-gradient-to-r from-white via-indigo-100 to-blue-50 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl hover:border-pink-400 hover:bg-gradient-to-br hover:from-indigo-100 hover:to-white"
          >
            <div
              className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-600`}
            >
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-600">
              {step.step}
            </h3>
            <p className="text-lg font-bold text-gray-700 mt-3 hover:text-indigo-700 transition-colors duration-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
