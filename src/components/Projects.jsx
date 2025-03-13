import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails"; // Import the new component
import { projects } from "../utils/constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="h-screen bg-gray-100 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-black font-bold font-poppins"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 md:h-32 object-cover rounded-lg mb-2 md:mb-4"
                />
                <h3 className="text-xl md:text-2xl text-black font-bold font-poppins">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2 font-poppins text-sm md:text-base">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Show Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;