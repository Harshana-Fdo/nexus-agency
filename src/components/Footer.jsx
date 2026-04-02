import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <motion.div 
          className="footer-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>HAVE A <span>PROJECT?</span></h2>
          <a href="mailto:hello@nexus.com" className="footer-mail">LET'S TALK →</a>
        </motion.div>

        <div className="footer-bottom">
          <div className="footer-info">
            <div className="footer-logo">NEXUS<span>DIGITAL</span></div>
            <p>Building the digital future, one pixel at a time.</p>
          </div>

          <div className="footer-links-grid">
            <div className="link-group">
              <h4>NAVIGATION</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
            </div>
            <div className="link-group">
              <h4>SOCIAL</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Behance</a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2026 NEXUS DIGITAL. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY HARSHANA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;