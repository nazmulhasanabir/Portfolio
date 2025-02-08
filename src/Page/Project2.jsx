import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import img from "../assets/Feedbacker.png";
const Project2 = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-950 text-white py-16 px-6 flex  justify-center">
          <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row  gap-12 items-center">
            {/* Text Section */}
            <div>
              <p className="text-blue-500 text-sm">Featured Project</p>
              <h2 className="text-3xl font-bold mt-2">
              FEEDBACKER
              </h2>
              <p className="text-gray-400 mt-4">
                The Best Service Review Application System is a robust and
                user-friendly platform that allows users to explore, review, and
                manage services effectively. This application provides a
                seamless interface for service providers and reviewers, ensuring
                a professional experience. adventure experiences seamlessly. It
                offers a user-friendly interface, authentication, and detailed
                adventure listings.
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
              Firebase
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
                <a
                  href="https://github.com/nazmulhasanabir/Feedbacker-client-side"
                  className="hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://feedbacker-76382.web.app/"
                  className="hover:text-white"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
               {/* Image Section */}
               <div className="rounded-2xl border-2 border-blue-500 p-4 overflow-hidden shadow-lg">
              <img
                src={img} // Change this to your actual image path
                alt="Project Preview"
                className="w-full h-auto rounded-xl"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
