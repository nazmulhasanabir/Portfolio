import About from "../Page/About";
import Education from "../Page/Education";
import HomePage from "../Page/HomePage";
import Navbar from "../Page/Navbar";
import Project1 from "../Page/Project1";
import Project2 from "../Page/Project2";
import Project3 from "../Page/Project3";

import Skill from "../Page/Skill";
const Home = () => {
  return (
    <div className="bg-gray-950">
    <div className="w-10/12 mx-auto text-white">
      <Navbar></Navbar>
      <div id="home">
        <HomePage></HomePage>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skill">
        <Skill></Skill>
      </div>
      <div id="education">
        <Education></Education>
      </div>
      <div id="project">
      <Project1></Project1>
      <Project2></Project2>
      <Project3></Project3>
      </div>
    </div>
  </div>
  );
};

export default Home;
