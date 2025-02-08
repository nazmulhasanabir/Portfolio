import img from "../assets/Screenshot_3.png";
const HomePage = () => {
  return (
    <div>
      <div className=" w-6/12 mx-auto">
        <div className="flex justify-between  items-center mt-20 ">
          <div>
            <p className="text-2xl  text-center">
              <span> "Hi, I'm</span> <br />{" "}
              <span className="font-bold">Nazmul Hasan Abir</span>
              <br />
              <span className="font-bold">web developer</span> with a passion
              for creating beautiful and responsive websites
            </p>
            <div className=" flex justify-center m-5">
            <button className="btn mr-4 btn-success">Hire Me</button>
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
