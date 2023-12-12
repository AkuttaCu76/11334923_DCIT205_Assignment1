import { useState } from "react";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

const Nav = () => {
  const {click, setClick} = useState(false);
  const handleClick = () => setClick(!click);
  
  const content = <>
     <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
      <ul className="text-center text-x1 p-20">
        <Link spy={true} smooth={true} to="Landing">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="Dashboard">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Dashboard</li>
        </Link>
        <Link spy={true} smooth={true} to="Grade">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">ReportForm</li>
        </Link>
        <Link spy={true} smooth={true} to="Missing">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">GradesForm</li>
        </Link>
        <Link spy={true} smooth={true} to="Login">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Login</li>
        </Link>
        <Link spy={true} smooth={true} to="Instructors">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Instructors</li>
        </Link>
        <Link spy={true} smooth={true} to="HelpandSupport">
               <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Help</li>
        </Link>
      </ul>
      </div> 
  </>
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-12">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link spy={true} smooth={true} to="Landing">
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Dashboard">
               <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">Dashboard</li>
        </Link>
        <Link spy={true} smooth={true} to="Grade">
               <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">ReportForm</li>
        </Link>
        <Link spy={true} smooth={true} to="Missing">
               <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">GradesForm</li>
        </Link>
        <Link spy={true} smooth={true} to="Login">
               <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">Login</li>
        </Link>
        <Link spy={true} smooth={true} to="Instructors">
               <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">Instructors</li>
        </Link>
        <Link spy={true} smooth={true} to="HelpandSupport">
               <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600  cursor-pointer">Help</li>
        </Link>
          </ul>
              </div>
        </div>
        <div>
              {click && content}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>

      </div>
  </nav>
  );
};

export default Nav;
