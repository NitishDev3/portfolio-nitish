import React from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/constants";

const About = () => {


  return (
    <section
      id="about"
      className="h-screen w-full bg-gray-100 flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-black font-bold font-poppins"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <p className="text-lg md:text-xl text-gray-700 font-poppins w-[95vw] md:w-[50vw]">
            I am a passionate and detail-oriented developer with expertise in
            building modern, scalable, and user-friendly web applications. My
            technical skills span across front-end, back-end, databases, and
            DevOps, enabling me to deliver end-to-end solutions.
          </p>
        </motion.div>
      </div>

      {/* Static Skills Ribbon */}
      <div className="mt-12 w-full py-4 flex items-center justify-center">
        <img
          src="https://www.aalpha.net/wp-content/uploads/2023/11/MERN-Stack-technologies.png"
          alt=""
          className="h-20"
        />
      </div>

      {/* Auto-Scrolling Skills Cards */}
      <div className="mt-8 w-full overflow-hidden">
        <div className="flex space-x-8 animate-scroll">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-20 h-20 md:w-48 md:h-48 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-2 md:p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 md:w-20 md:h-20 object-contain mb-2 md:mb-4"
              />
              <p className="text-black text-sm md:text-lg font-poppins font-semibold text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
          {/* Duplicate the skills for seamless scrolling */}
          {skills.map((skill, index) => (
            <motion.div
              key={index + skills.length}
              className="flex-shrink-0 w-20 h-20 md:w-48 md:h-48 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-2 md:p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 md:w-20 md:h-20 object-contain mb-2 md:mb-4"
              />
              <p className="text-black text-sm md:text-lg font-poppins font-semibold text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
