import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import img from "../assets/494357787_2660104427518512_8680490518440908560_n.png";
import { TbListDetails } from "react-icons/tb";
const GrouProject = () => {
  return (
    <div>
      <div>
        <p className="text-blue-500 text-xl font-bold text-center">
          Group Project
        </p>

        <div className="bg-gray-950 text-white py-16 px-6 flex  justify-center">
          <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row  gap-12 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-3xl font-bold mt-2">Rex Auction</h2>
              <p className="text-gray-400 mt-4">
                Rex Auction is a modern auction platform built with React,
                Next.js, and Firebase, designed for a seamless and interactive
                bidding experience. This project leverages Vite for fast
                development, Tailwind CSS for styling, and Framer Motion for
                smooth animations.
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
                  href="https://github.com/SouravDn-p/RexAuction"
                  className="hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://rex-auction.web.app/"
                  className="hover:text-white"
                >
                  <FaExternalLinkAlt />
                </a>
                <a href="/Group-project-details" className="hover:text-white">
                  <TbListDetails />
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

export default GrouProject;
