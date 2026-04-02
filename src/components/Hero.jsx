import React from 'react';
import { motion } from 'framer-motion'; // Animation සඳහා
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* අකුරු පහළ සිට ඉහළට මතු වන Animation එක */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Build <span className="highlight">Digital</span> Futures
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Creative solutions for modern brands with seamless transition effects.
        </motion.p>
        
        <motion.button 
          className="cta-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;