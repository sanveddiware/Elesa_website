import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/elesa_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔒 Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  // 🔽 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Link styles
  const linkClass = ({ isActive }) =>
    `text-xl transition ${
      isActive
        ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold"
        : "text-white hover:text-blue-400"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-lg transition ${
      isActive
        ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/20 backdrop-blur-md shadow-md"
            : "bg-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Club Logo" className="h-25 w-auto mr-4" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
              <NavLink to="/events" className={linkClass}>
                Events
              </NavLink>
              {/* <NavLink to="/electrovert" className={linkClass}>
                Electrovert
              </NavLink> */}
              <a
  href="https://electrovert-website.vercel.app/"
  target="_blank"
  
  className={`${linkClass} text-xl  text-white hover:text-blue-400`}
>
  Electrovert
</a>

              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (now OUTSIDE nav) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 
          bg-gradient-to-b from-black via-gray-900 to-black 
          shadow-xl transform transition-transform duration-300 ease-in-out md:hidden z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col mt-8 space-y-2">
          <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/events" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Events
          </NavLink>
          <NavLink to="/electrovert" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Electrovert
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
