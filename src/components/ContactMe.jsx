import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          {/* Heading with Animation */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Contact Me
          </motion.h2>

          {/* Form with Animation */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="mt-12 w-full max-w-md mx-auto bg-gray-700 p-8 rounded-xl shadow-2xl"
          >
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;