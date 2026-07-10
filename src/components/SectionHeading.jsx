import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ title, subtitle, alignment = 'center', light = false }) => {
  return (
    <div className={`section-heading align-${alignment} ${light ? 'light-mode' : ''}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeading;
