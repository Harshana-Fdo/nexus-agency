import React from 'react';
import { motion } from 'framer-motion'; 
import './Hero.css';

function Hero() {
  
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVars = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] } }
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        variants={containerVars}
        initial="initial"
        animate="animate"
      >
        <div className="overflow-hidden">
          <motion.h1 variants={itemVars}>
            We Build <span className="highlight">Digital</span> Futures
          </motion.h1>
        </div>
        
        <div className="overflow-hidden">
          <motion.p variants={itemVars}>
            Creative solutions for modern brands with seamless transition effects.
          </motion.p>
        </div>
        
        <motion.div variants={itemVars}>
          <motion.button 
            className="cta-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>

     
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="line"></div>
      </motion.div>
    </section>
  );
}

export default Hero;