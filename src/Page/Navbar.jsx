import { Link } from 'react-scroll';
import img from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className="text-white bg-amber-400">
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
             <Link  to="home" className='cursor-pointer'  spy={true} smooth={true} duration={500}>
              <a>Home</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="about" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>About</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="skill" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Skill</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="education" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Education</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="project" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Project</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="contact" className='cursor-pointer' spy={true} smooth={true} duration={500}> 
              <a>Contact</a>
            </Link>
            </ul>
          </div>
          <img className="w-[90px]" src={img} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <Link to="home" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Home</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="about" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>About</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="skill" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Skill</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="education" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Education</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="project" className='cursor-pointer' spy={true} smooth={true} duration={500}>
              <a>Project</a>
            </Link>
            <div className="divider lg:divider-horizontal"></div>
            <Link to="contact"className='cursor-pointer' spy={true} smooth={true} duration={500}> 
              <a>Contact</a>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
