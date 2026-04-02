import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

function Intro() {
  return (
    <section className="intro" id="about">
      <motion.div 
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Transforming Ideas into Reality</h2>
        <p>
          At Nexus Digital, we bridge the gap between imagination and technology. 
          Our team focuses on delivering high-quality web solutions with 
          stunning visuals and smooth, creative transitions.
        </p>
      </motion.div>
    </section>
  );
}

export default Intro;