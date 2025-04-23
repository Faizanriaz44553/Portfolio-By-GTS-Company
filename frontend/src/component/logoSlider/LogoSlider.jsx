import React from "react";
import { motion } from "framer-motion";
import './LogoSlider.css';

const logos = [
  "/images/Pakistan-Stock-Exchange-Limited.jpg",
  "/images/BF-Biosciences.jpg",
  "/images/LMKR.jpg",
  "/images/ORIX-Modaraba.jpg"
];

const LogoSlider = () => {
  return (
    <div className="slider-container">
      <motion.div
        className="slider-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-wrapper" key={index}>
            <img className="logo-wrapper-images" src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
