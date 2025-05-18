import Footer from "./Footer";
import Navbar from "./Navbar";

const ProjectOneDetails = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-950 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400">
          Mess Meals - Hostel Management System
        </h2>
        <p className="text-gray-400 mt-4">
          Mess Meals is a Hostel Management System designed for university
          hostels. It enables students to log in, view meals, post reviews, and
          request meals, while administrators can efficiently manage meal data,
          reviews, and student information. Built using the MERN stack (MongoDB,
          Express.js, React.js, Node.js), this system ensures streamlined
          operations and enhances the overall student experience in university
          hostels.
        </p>

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Node.js",
              "MongoDB",
              "DaisyUI",
              "React.js",
              "Express.js",
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

        {/* Frontend */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Frontend</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>React.js – Frontend framework</li>
            <li>Tailwind CSS – Modern UI design</li>
            <li>React Hook Form – Form validation</li>
            <li>TanStack Query – Data fetching & caching</li>
            <li>SweetAlert2 – Custom alerts & popups</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Backend</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Node.js – JavaScript runtime</li>
            <li>Express.js – Web framework</li>
            <li>MongoDB – NoSQL database</li>
          </ul>
        </div>

        {/* Authentication */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">
            Authentication
          </h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Firebase Authentication – Secure user authentication</li>
          </ul>
        </div>

        {/* Payment */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Payment</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Stripe – Secure payment processing</li>
          </ul>
        </div>

        {/* Image Upload */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Image Upload</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>ImageBB – Image hosting service</li>
          </ul>
        </div>

        {/* Version Control */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">
            Version Control
          </h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Git & GitHub – Version control and repository hosting</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectOneDetails;
