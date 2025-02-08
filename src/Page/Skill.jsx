const Skill = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-20">Skills</h2>
      <div className=" flex items-center justify-center max-w-screen-sm mx-auto bg-gray-900 rounded-3xl">
        <div className="flex flex-wrap gap-5 md:gap-10 justify-center p-10">
          {/* HTML */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              alt="HTML"
              className="h-12 w-12"
            />
          </div>

          {/* CSS */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              alt="CSS"
              className="h-12 w-12"
            />
          </div>

          {/* JavaScript */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
              alt="JavaScript"
              className="h-12 w-12"
            />
          </div>

          {/* React */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React"
              className="h-12 w-12"
            />
          </div>

          {/* Next.js */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              alt="Next.js"
              className="h-12 w-12"
            />
          </div>

          {/* Node.js */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              alt="Node.js"
              className="h-12 w-12"
            />
          </div>

          {/* Tailwind CSS */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
              alt="Tailwind CSS"
              className="h-12 w-12"
            />
          </div>

          {/* MongoDB */}
          <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <img
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              alt="MongoDB"
              className="h-12 w-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
