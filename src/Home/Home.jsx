import About from "../Page/About";
import Contact from "../Page/Contact";
import Education from "../Page/Education";
import Footer from "../Page/Footer";
import GrouProject from "../Page/GrouProject";
import HomePage from "../Page/HomePage";
import Navbar from "../Page/Navbar";
import Project1 from "../Page/Project1";
import Project2 from "../Page/Project2";
import Project3 from "../Page/Project3";
import Skill from "../Page/Skill";
const Home = () => {
  return (
    <div className="bg-gray-950 scroll-smooth">
      <div className="sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <div className="w-10/12 mx-auto text-white">
        <div>
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
          <GrouProject></GrouProject>
        </div>
        <div id="contact">
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
