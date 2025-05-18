import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import img from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="text-white bg-blue-400 rounded-b-2xl border-2 border-b-white  ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 text-center rounded-box z-[1] mt-3 w-52  shadow"
            >
              <RouterLink to="/" className="cursor-pointer">
                Home
              </RouterLink>
              <div className="divider lg:divider-horizontal"></div>
              <ScrollLink
                to="about"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a>About</a>
              </ScrollLink>
              <div className="divider lg:divider-horizontal"></div>
              <ScrollLink
                to="skill"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a>Skill</a>
              </ScrollLink>
              <div className="divider lg:divider-horizontal"></div>
              <ScrollLink
                to="education"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a>Education</a>
              </ScrollLink>
              <div className="divider lg:divider-horizontal"></div>
              <ScrollLink
                to="project"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a>Project</a>
              </ScrollLink>
              <div className="divider lg:divider-horizontal"></div>
              <ScrollLink
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                <a>Contact</a>
              </ScrollLink>
            </ul>
          </div>
          <img className="w-[50px] rounded-full  " src={img} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <RouterLink to="/" className="cursor-pointer">
              Home
            </RouterLink>
            <div className="divider lg:divider-horizontal"></div>
            <ScrollLink
              to="about"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <a>About</a>
            </ScrollLink>
            <div className="divider lg:divider-horizontal"></div>
            <ScrollLink
              to="skill"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <a>Skill</a>
            </ScrollLink>
            <div className="divider lg:divider-horizontal"></div>
            <ScrollLink
              to="education"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <a>Education</a>
            </ScrollLink>
            <div className="divider lg:divider-horizontal"></div>
            <ScrollLink
              to="project"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <a>Project</a>
            </ScrollLink>
            <div className="divider lg:divider-horizontal"></div>
            <ScrollLink
              to="contact"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={2500}
            >
              <a>Contact</a>
            </ScrollLink>
      
          </ul>
        </div>
        <div className="navbar-end  ">
          <a
            href="https://drive.usercontent.google.com/uc?id=1nifixPVWM_zXvCjagsRJ2TXMr887S23e&export=download"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
