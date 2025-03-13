import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 z-50 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white text-2xl font-semibold">Nitish.D∃V</h1>
        </motion.div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          className="md:hidden mt-4 bg-black p-4 rounded-lg"
        >
          <motion.div
            variants={linkVariants}
            className="flex flex-col space-y-4"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#B026FF] cursor-pointer transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;