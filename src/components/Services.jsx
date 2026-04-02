import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const serviceList = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive interfaces that provide seamless user experiences.",
      icon: "🎨" 
    },
    {
      title: "Web Development",
      desc: "Developing fast, scalable, and secure web applications for modern businesses.",
      icon: "💻"
    },
    {
      title: "Digital Strategy",
      desc: "Empowering brands through data-driven digital marketing and growth strategies.",
      icon: "🚀"
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Expertise</h2>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <motion.div 
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
          
            <div className="service-emoji">{service.icon}</div>
            
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="read-more">Read More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;