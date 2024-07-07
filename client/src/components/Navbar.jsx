
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const togglePane = () => {
    setIsPaneOpen(!isPaneOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-cyan-600 to-green-400 text-black px-6 py-6 flex justify-between items-center">
        <button
          className="md:hidden text-white"
          onClick={togglePane}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <div className="text-xl font-bold"><a href="http://localhost:5173/">jobTracker</a></div>
        <div className="hidden md:flex space-x-4">
          {/* <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link> */}
          {/* <Link to="/login" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-cyan-600 h-9 rounded-md px-3">Login</Link>
          <Link to="/signup" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-cyan-600 h-9 rounded-md px-3">Sign Up</Link> */}
          <Link className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-cyan-600 h-9 rounded-md px-3" to="/create">
           Create Record
        </Link>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 transform ${
          isPaneOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 bg-white md:hidden`}
      >
        <div className="p-4">
          <button className="text-gray-700 mb-4" onClick={togglePane}>
            &#10005; {/* Close icon */}
          </button>
          <nav className="flex flex-col space-y-2">
            {/* <Link to="/login" className="hover:underline" onClick={togglePane}>
              Login
            </Link>
            <Link to="/signup" className="hover:underline" onClick={togglePane}>
              Sign Up
            </Link> */}
             {/* <Link to="/login" className="inline-flex items-center bg-blue-400 justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" >Login</Link>
             <Link to="/signup" className="inline-flex items-center  bg-blue-400 justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3">Sign Up</Link> */}
            <Link className="inline-flex items-center justify-center  bg-blue-400 whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
           Create Employee
        </Link>
          </nav>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${
          isPaneOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={togglePane}
      ></div>
    </>
  );
}

export default Navbar;
