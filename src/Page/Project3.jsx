import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img from "../assets/movie.png";
import { TbListDetails } from "react-icons/tb";
const Project3 = () => {
    return (
         <div>
             <div>
               <div className="bg-gray-950 text-white py-16 px-6 flex justify-center">
                 <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                       {/* Image Section */}
               <div className="rounded-2xl border-2 border-blue-500 p-4 overflow-hidden shadow-lg">
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
                     MovieNest
                     </h2>
                     <p className="text-gray-400 mt-4">
                     MovieNest is a modern movie portal designed to provide a seamless experience for movie enthusiasts. Users can explore, add, and manage their movie collection with an intuitive and visually stunning interface.


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
                     Firebase Authentication 
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
                         href="https://github.com/nazmulhasanabir/Movie-Review-Client-side"
                         className="hover:text-white"
                       >
                         <FaGithub />
                       </a>
                       <a
                         href="https://assighnment-10.web.app/"
                         className="hover:text-white"
                       >
                         <FaExternalLinkAlt />
                       </a>
                       <a
                         href="/project-details-3"
                         className="hover:text-white"
                       >
                        <TbListDetails />
                       </a>
                     </div>
                   </div>
                   
                 </div>
               </div>
             </div>
           </div>
    );
};

export default Project3;