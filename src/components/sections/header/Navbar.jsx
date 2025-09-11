import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/elesa_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep font size same, only add color & font-weight for active link
  const linkClass = ({ isActive }) =>
    `text-xl transition ${
      isActive ? "text-4xl bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent " : "text-white hover:text-blue-400"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-2 text-xl transition ${
      isActive ? "text-blue-400" : "text-white hover:bg-white/10"
    }`;

  return (
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
            <img src={logo} alt="Club Logo" className="h-26 w-auto mr-4" />
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
              Electrovert
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            scrolled ? "bg-white/20 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <NavLink to="/" className={mobileLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass}>
            About
          </NavLink>
          <NavLink to="/events" className={mobileLinkClass}>
            Events
          </NavLink>
          <NavLink to="/gallery" className={mobileLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
