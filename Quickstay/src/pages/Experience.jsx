import React, { useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      feedback:
        "The stay was wonderful! The staff was very friendly and the rooms were clean and spacious.",
    },
    {
      id: 2,
      name: "Priya Mehta",
      feedback:
        "Amazing view from the balcony. Food was delicious. Would definitely visit again!",
    },
  ]);

  const [newExperience, setNewExperience] = useState({
    name: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExperience.name && newExperience.feedback) {
      setExperiences([
        ...experiences,
        { id: Date.now(), ...newExperience },
      ]);
      setNewExperience({ name: "", feedback: "" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-28 pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="min-h-screen  bg-gray-100 rounded-3xl px-6 md:px-16 lg:px-32 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Customer Experiences</h1>

      {/* List of Experiences */}
      <div className="space-y-4 mb-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{exp.name}</h3>
            <p className="text-gray-600 mt-1">{exp.feedback}</p>
          </div>
        ))}
      </div>

      {/* Add New Experience */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Share Your Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newExperience.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="feedback"
            placeholder="Write your experience..."
            value={newExperience.feedback}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Experience
          </button>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default Experience;