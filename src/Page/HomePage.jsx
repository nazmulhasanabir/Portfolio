import { Link } from "react-scroll";
import img from "../assets/img.png";
const HomePage = () => {
  return (
    <div>
      <div className="  sm:w-6/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10    items-center mt-20 ">
          <div>
            <p className="text-2xl  text-center">
              <span> "Hi, I'm</span> <br />{" "}
              <span className="font-bold">Nazmul Hasan Abir</span>
              <br />
              <span className="font-bold">Web Developer</span> with a passion
              for creating beautiful and responsive websites
            </p>
            <div className=" flex justify-center m-5">
              <Link to="contact" duration={2500} smooth={true} spy={true}>
                <button className="btn mr-4 bg-blue-500 text-white">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={img} class=" rounded-lg shadow-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
