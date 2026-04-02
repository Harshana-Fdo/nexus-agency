import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';

const projects = [
  { title: "FUTURE TECH", category: "BRANDING", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600" },
  { title: "NEXUS APP", category: "DEVELOPMENT", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600" }
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <h2 className="work-title">FEATURED WORK</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="work-item" 
            key={index}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <div className="work-img-wrapper">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="work-info">
              <h3>{project.title}</h3>
              <span>{project.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;