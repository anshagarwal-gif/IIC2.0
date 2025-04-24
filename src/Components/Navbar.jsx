import React, { useState } from 'react';
import IICLogo from '../assets/iiclogo.png';
import MITLogo from '../assets/mitlogo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkClasses = "hover:text-blue-600 cursor-pointer font-poppins text-custom-16";

  return (
    <nav className="flex justify-between items-center py-4 px-14 bg-white shadow-md">
      {/* Left Logo */}
      <div className="flex items-center">
        <img
          src={IICLogo} // Replace with actual URL of the IIC logo
          alt="Institution's Innovation Council Logo"
          className="h-[52px] w-[111px] w-auto"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex space-x-16 font-poppins text-custom-16 font-normal text-gray-800">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClasses} font-bold` : linkClasses
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${linkClasses} font-bold` : linkClasses
            }
          >
            About
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? `${linkClasses} font-bold` : linkClasses
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teams"
            className={({ isActive }) =>
              isActive ? `${linkClasses} font-bold` : linkClasses
            }
          >
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${linkClasses} font-bold` : linkClasses
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Right Logo */}
      <div className="hidden lg:block">
        <img
          src={MITLogo} // Replace with actual URL of the MIT-ADT logo
          alt="MIT-ADT University Logo"
          className="h-[58px] w-[114px] w-auto"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-16 left-0 w-full bg-white shadow-md lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} z-10`}>
        <ul className="flex flex-col items-center space-y-4 py-4 font-poppins text-custom-16 font-normal text-gray-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${linkClasses} font-bold` : linkClasses
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${linkClasses} font-bold` : linkClasses
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive ? `${linkClasses} font-bold` : linkClasses
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? `${linkClasses} font-bold` : linkClasses
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${linkClasses} font-bold` : linkClasses
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
