import logo from "../../assets/Logo1.png";
// import Btn from "../Buttons/Btn";
import { FiBarChart2 } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const menu = (
    <>
      <li>
        <Link to="https://edvive.com/" target="blank">
          Edvive
        </Link>
      </li>
      <li>
        <Link to="https://edvive.com/readvive" target="blank">
          Readvive
        </Link>
      </li>
      {/* <li>About Us</li>
              <li>Blog</li> */}
      <li>
        <Link to="https://edvive.easy.jobs/" target="__blank">
          Career
        </Link>
      </li>
    </>
  );
  return (
    <header>
      <nav className="w-11/12 my-nav mx-auto flex justify-between items-center lg:py-5 py-8">
        {/* Navbar Logo Here  */}
        <Link to="/">
          {/* <img className="w-28" src={logo} alt="" /> */}
          <h1 className="text-4xl font-bold font-theme">Vocavive</h1>
        </Link>
        {/* Navbar List Here  */}
        <div className="flex items-center gap-8">
          <div>
            <ul className="hidden md:flex gap-8 font-medium">{menu}</ul>
          </div>
        </div>
        {/* Navbar Button Here  */}
        <div>
          {/* <Btn variant="primary" className="hidden md:block">
            Get Started
          </Btn> */}
        </div>
        <div
          className={`fixed ${
            toggleNav ? "top-0" : "-top-full"
          } duration-200 left-0 w-full z-50 backdrop-blur-lg h-96 text-center flex flex-col justify-center items-center gap-6`}
        >
          {/* Navbar List For Mobile Here  */}
          <ul className="space-y-6 font-medium">{menu}</ul>
          {/* Mobile Nav Cross button  */}
          <RxCross1
            onClick={() => setToggleNav(false)}
            className="absolute top-0 right-0 m-5 cursor-pointer"
            size={30}
          />
        </div>
        {/* Mobile open Nav button  */}
        <button
          onClick={() => setToggleNav(true)}
          className="md:hidden w-fit bg-primary p-2 font-bold rounded-lg dropShadow"
        >
          <FiBarChart2 className="-rotate-90 text-white" size={30} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
