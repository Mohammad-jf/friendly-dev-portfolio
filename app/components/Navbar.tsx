import { FaLaptopCode } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>Friendly Developer</span>
        </NavLink>

        {/* desktop nav */}

        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-bold"
                  : "text-gray-300 hover:text-blue-300 transition-colors duration-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-bold"
                  : "text-gray-300 hover:text-blue-300 transition-colors duration-300"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-bold"
                  : "text-gray-300 hover:text-blue-300 transition-colors duration-300"
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-bold"
                  : "text-gray-300 hover:text-blue-300 transition-colors duration-300"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-bold"
                  : "text-gray-300 hover:text-blue-300 transition-colors duration-300"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
