import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

function Intro() {
  return (
    <section className="intro" id="about">
      <div className="container">
       
        <motion.span 
          className="intro-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Who we are
        </motion.span>

        
        <motion.h2 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We bridge the gap between <span className="text-outline">imagination</span> and technology.
        </motion.h2>

        <motion.div 
          className="intro-details"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <p>
            Nexus Digital is a creative powerhouse dedicated to crafting 
            high-performance digital experiences. We don't just build websites; 
            we create smooth, immersive journeys that define the future of the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;