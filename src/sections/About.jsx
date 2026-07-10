import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Target, Users, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: 'Customer-First Approach',
      description: 'We prioritize your unique needs, taking the time to understand your personal and business risks before recommending any policy.'
    },
    {
      icon: <Target size={24} />,
      title: 'Personalized Advice',
      description: 'Insurance is not one-size-fits-all. We provide tailored guidance to help you choose the most suitable and cost-effective coverage.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Complete Transparency',
      description: 'We demystify insurance terms and conditions, ensuring you fully understand your coverage, benefits, and claims process.'
    }
  ];

  return (
    <section id="about" className="section section-bg-white about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-content">
            <SectionHeading 
              subtitle="About Us" 
              title="Your Trusted Insurance Advisor in Rwanda" 
              alignment="left"
            />
            
            <p className="about-text-lead">
              Gasana Insurance Sales Agent is dedicated to providing professional, reliable, and transparent insurance guidance for individuals and businesses in Kigali and across Rwanda.
            </p>
            
            <p className="about-text">
              Navigating the insurance landscape can be complex. Our mission is to simplify this process. We act as your dedicated advisor, analyzing your specific risks and helping you secure the right protection for your family, your property, and your business. 
            </p>
            
            <p className="about-text">
              With a deep understanding of the Rwandan insurance market, we connect you with premium insurance solutions that offer true financial security and peace of mind when you need it most.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Client Focus</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support Access</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Premium</span>
                <span className="stat-label">Consultation</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
