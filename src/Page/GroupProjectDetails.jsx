import Footer from "./Footer";
import Navbar from "./Navbar";

const GroupProjectDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-950 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400">
          Rex Auction - Real-time Bidding Platform
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4">
          Rex Auction is a modern auction platform built with React, Next.js, and Firebase, designed to provide a seamless and interactive real-time bidding experience. Built for speed with Vite and styled using Tailwind CSS and DaisyUI.
        </p>

        {/* Live Demo (optional) */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Live Demo</h3>
          <p className="text-gray-300 underline mt-1">
            <a href="https://rex-auction.web.app" target="_blank" rel="noreferrer">
              REX AUCTION
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Features</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Real-time bidding functionality powered by Firebase</li>
            <li>Modern, clean UI using Tailwind CSS and DaisyUI</li>
            <li>Fast development environment with Vite</li>
            <li>Built with Next.js for optimized performance and routing</li>
            <li>Fully responsive design for all devices</li>
            <li>Interactive animations using Framer Motion, AOS, and Lottie</li>
            <li>Alerts and notifications via SweetAlert2 and React Toastify</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm text-gray-300">
            <div>
              <strong>Frontend:</strong>
              <ul className="list-disc ml-5">
                <li>React</li>
                <li>Next.js</li>
                <li>React Router DOM</li>
                <li>More</li>
              </ul>
            </div>
            <div>
              <strong>State & Data:</strong>
              <ul className="list-disc ml-5">
                <li>Firebase (Realtime DB)</li>
                <li>LocalForage</li>
                <li>Axios</li>
                <li>Axios</li>
                <li>More</li>
              </ul>
            </div>
            <div>
              <strong>Styling:</strong>
              <ul className="list-disc ml-5">
                <li>Tailwind CSS</li>
                <li>DaisyUI</li>
                <li>Lucide React</li>
                <li>More</li>
              </ul>
            </div>
            <div>
              <strong>Animations:</strong>
              <ul className="list-disc ml-5">
                <li>Framer Motion</li>
                <li>AOS</li>
                <li>Lottie</li>
                <li>More</li>
              </ul>
            </div>
            <div>
              <strong>Notifications:</strong>
              <ul className="list-disc ml-5">
                <li>SweetAlert2</li>
                <li>React Toastify</li>
                <li>More</li>
              </ul>
            </div>
            <div>
              <strong>Build Tool:</strong>
              <ul className="list-disc ml-5">
                <li>Vite</li>
                <li>More</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">How It Works</h3>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Users can browse live auctions and view product details</li>
            <li>Logged-in users can place bids in real-time</li>
            <li>Products display countdowns for auction end time</li>
            <li>Bidders receive real-time updates and notifications</li>
            <li>Admins can create new auctions and manage listings</li>
          </ul>
        </div>

        {/* Firebase Setup (optional if applicable) */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-300">Firebase Integration</h3>
          <p className="text-gray-400">
            Firebase Realtime Database powers the live auction updates and authentication system. Setup includes:
          </p>
          <ul className="list-disc pl-5 text-gray-400 mt-2">
            <li>Enable Firebase Realtime Database & Authentication</li>
            <li>Set up appropriate security rules for user access</li>
            <li>Store API keys and credentials in a secure <code>.env</code> file</li>
          </ul>
        </div>

  
      </div>
      <Footer />
    </div>
  );
};

export default GroupProjectDetails;
