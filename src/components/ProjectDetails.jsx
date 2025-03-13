import React from "react";
import { motion } from "framer-motion";

const ProjectDetails = ({ project, onClose }) => {
  // Close modal when clicking outside the card
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick} // Close modal on backdrop click
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
        >
          <span className="text-xl font-bold">×</span>
        </button>

        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>

        {/* Project Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
        />

        {/* Project Description */}
        <p className="text-gray-700 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <p className="text-gray-700 mb-4">
          <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </p>

        {/* View Project Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-600 transition-colors"
        >
          View Project
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;