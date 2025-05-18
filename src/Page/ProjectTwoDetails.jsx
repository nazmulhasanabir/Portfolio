import Footer from "./Footer";
import Navbar from "./Navbar";

const ProjectTwoDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-950 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400">
          Feedbacker - Service Review Application
        </h2>
        <p className="text-gray-400 mt-4">
          Feedbacker is a robust and user-friendly platform that allows users to explore, review, and manage services effectively. It offers a seamless interface for both service providers and reviewers, featuring authentication, dynamic service listings, and insightful user feedback options. Designed with modern web technologies, Feedbacker ensures an optimized and engaging experience.
        </p>

    

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
        
              "Firebase",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "TanStack Query",
              "Axios",
              "MongoDB",
              "More",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Features</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Dynamic routing and service listings</li>
            <li>Secure Firebase authentication</li>
            <li>Add, update, and delete services and reviews</li>
            <li>Testimonial slider with Swiper</li>
            <li>Private routes for logged-in users</li>
            <li>Salary chart with Recharts</li>
          </ul>
        </div>

        {/* Page Structure */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Page Structure</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Navbar: Changes based on login status</li>
            <li>Banner section with highlights</li>
            <li>Featured services and partner sections</li>
            <li>Service listing with search & filter</li>
            <li>Service details with reviews</li>
          </ul>
        </div>

        {/* Authentication */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Authentication</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Firebase login and registration</li>
            <li>Password validation for user security</li>
          </ul>
        </div>

        {/* Private Pages */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Private Pages</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Add Service: Submit new services</li>
            <li>My Services: Manage submitted services</li>
            <li>My Reviews: Manage submitted reviews</li>
          </ul>
        </div>

        {/* Deployment */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Deployment</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Client hosted on Vercel</li>
            <li>Server hosted on Render or Railway</li>
            <li>Firebase & MongoDB credentials stored in environment variables</li>
          </ul>
        </div>

        {/* Version Control */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Version Control</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Git & GitHub – Version control and repository hosting</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectTwoDetails;
