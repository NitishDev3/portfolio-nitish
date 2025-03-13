import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  // const [headline, setHeadline] = useState("Front End Developer");
  
  const [text, setText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const headlines = ["Front End Developer", "MERN Stack Developer"];

  const handleTyping = () => {
    const currentHeadline = headlines[loopNum % headlines.length];
    const updatedText = isDeleting
      ? currentHeadline.substring(0, text.length - 1)
      : currentHeadline.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentHeadline) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    setTypingSpeed(isDeleting ? 75 : 150);
  };

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, headlines, typingSpeed]);

  return (
    <section
      id="home"
      className="h-screen bg-black flex items-center justify-center"
    >
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl text-white font-bold font-poppins"
        >
          Hi, I'm a <span className="text-[#B026FF]">{text}</span>
          <span className="text-[#B026FF] animate-blink">|</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mt-4 font-poppins"
        >
          Building beautiful and responsive web experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
