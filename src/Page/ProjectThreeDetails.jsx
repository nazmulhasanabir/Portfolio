import Footer from "./Footer";
import Navbar from "./Navbar";

const ProjectThreeDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-950 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400">
          MovieNest - Movie Management Portal
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4">
          MovieNest is a modern movie portal designed to provide a seamless
          experience for movie enthusiasts. Users can explore, add, and manage
          their movie collection with an intuitive and visually stunning
          interface.
        </p>

        {/* Features */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Features</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>
              Add movies with title, genre, release year, rating, and duration
            </li>
            <li>Edit or delete movie entries</li>
            <li>Browse movies in a responsive grid layout</li>
            <li>Detailed movie page with delete/favorite option</li>
            <li>
              Firebase Authentication with email/password and Google sign-in
            </li>
            <li>Personalized favorites list per user</li>
            <li>Real-time data management with MongoDB</li>
            <li>Responsive UI with Tailwind CSS</li>
          </ul>
        </div>

        {/* Usage Guide */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Usage Guide</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Homepage displays a banner slider and adventure/movie cards</li>
            <li>“Explore Now” redirects logged-in users to movie details</li>
            <li>Non-logged-in users are prompted to log in</li>
            <li>Browse all movies with posters, genres, and ratings</li>
            <li>Logged-in users can add/edit/delete movies</li>
            <li>Users can manage favorites and collections after login</li>
            <li>Authentication persists across sessions</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">
            Technologies Used
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm text-gray-300">
            <div>
              <strong>Frontend:</strong>
              <ul className="list-disc ml-5">
                <li>React.js</li>
                <li>React Router DOM</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div>
              <strong>Backend:</strong>
              <ul className="list-disc ml-5">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div>
              <strong>Database:</strong>
              <ul className="list-disc ml-5">
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <strong>Authentication:</strong>
              <ul className="list-disc ml-5">
                <li>Firebase Authentication</li>
              </ul>
            </div>
            <div>
              <strong>Alerts & Animations:</strong>
              <ul className="list-disc ml-5">
                <li>SweetAlert2</li>
                <li>AOS (Animate on Scroll)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectThreeDetails;
