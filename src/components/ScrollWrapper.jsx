import React from 'react';
import './ScrollWrapper.css';

const ScrollWrapper = ({ children }) => {
  return (
    <main className="scroll-container">
      {React.Children.map(children, (child, index) => {
        if (!child) return null;
        return (
          <section className="section-wrapper" key={index}>
            <div className="content-inner">
              {child}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default ScrollWrapper;