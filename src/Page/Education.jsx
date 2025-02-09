import React, { useState } from "react";

const Education = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <>
    <div className="bg-gradient-to-r from-gray-700 to-black p-8 rounded-4xl mt-3">
      {/* Toggle Buttons */}
      <div className=" p-3 mb-4  flex  items-center justify-center  space-x-4 ">
        <button
          className={`px-6 py-2 rounded-lg text-lg font-semibold  ${
            activeTab === "education" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-lg font-semibold  ${
            activeTab === "experience" ? "bg-blue-500  text-white" : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
      </div>

    <div className=" flex flex-col items-center justify-center ">

      <div className="w-full max-w-5xl text-white">
        {/* Education Section */}
        {activeTab === "education" && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 border-b-4 border-white pb-2">EDUCATION</h2>
            <div className="relative pl-6 border-l-4 border-gray-400">
              {/* <div className="mb-8">
                <span className="bg-gray-700 px-3 py-1 text-sm rounded">2024-Present</span>
                <h3 className="text-xl font-semibold mt-2">B.Sc (Engg.) in CSE</h3>
                <p className="text-gray-300 text-sm">East Delta University</p>
                <p className="text-gray-400 text-sm mt-2">Chittagong, Bangladesh</p>
              </div> */}
              <div className="mb-8">
                <span className="bg-gray-700 px-3 py-1 text-sm rounded">2019-2024</span>
                <h3 className="text-xl font-semibold mt-2">Diploma Engineering in CSE</h3>
                <p className="text-gray-300 text-sm">National Institute Technology</p>
                <p className="text-gray-400 text-sm mt-2">Chittagong, Bangladesh</p>
              </div>
              <div>
                <span className="bg-gray-700 px-3 py-1 text-sm rounded">2017-2019</span>
                <h3 className="text-xl font-semibold mt-2">Secondary School Certificate</h3>
                <p className="text-gray-300 text-sm">Bangladesh-Korean Technical Training Center</p>
                <p className="text-gray-400 text-sm mt-2">Science</p>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <div className="flex items-center justify-center h-64">
            <h2 className="text-3xl font-bold text-gray-400">Coming Soon...</h2>
          </div>
        )}
      </div>
    </div>
    </div>
    
    
    </>
  );
};

export default Education;
