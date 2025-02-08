import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img from "../assets/image.png";
const Project1 = () => {
  return (
    <div>
      <p className="text-2xl font-bold text-center pt-10 lg:pt-16">Latest Projects</p>
      <p className="text-lg font-light text-center p-4 ">
        Here are some of my most recent and significant projects showcasing my
        skills and expertise.
      </p>
      <div>
        <div className="bg-gray-950 text-white py-16 px-6 flex justify-center">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="rounded-2xl border-2 border-blue-500 p-1 sm:p-4 overflow-hidden shadow-lg ">
              <img
                src={img} // Change this to your actual image path
                alt="Project Preview"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Text Section */}
            <div>
              <p className="text-blue-500 text-sm">Featured Project</p>
              <h2 className="text-3xl font-bold mt-2">
              Mess Meals - Hostel Management System
              </h2>
              <p className="text-gray-400 mt-4">
                Mess Meals is a Hostel Management System designed for university
                hostels. It enables students to log in, view meals, post
                reviews, and request meals, while administrators can efficiently
                manage meal data, reviews, and student information. Built using
                the MERN stack (MongoDB, Express.js, React.js, Node.js), this
                system ensures streamlined operations and enhances the overall
                student experience in university hostels.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                  MongoDB
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                    DaisyUi
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                    React.js
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                    Express.js
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                    More
                </span>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6 text-gray-400 text-xl">
                <a href="https://github.com/nazmulhasanabir/Mess-food-client-side" className="hover:text-white">
                  <FaGithub />
                </a>
                <a href="https://hostel-meal-management-ec2af.web.app/" className="hover:text-white">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
