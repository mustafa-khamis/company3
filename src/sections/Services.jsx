import React from 'react';
import { Car, HeartPulse, Shield, Home, Briefcase, Plane, Activity } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Car size={32} />,
      title: 'Motor Insurance',
      description: 'Comprehensive coverage for your vehicles against accidents, theft, and third-party liabilities on Rwandan roads.'
    },
    {
      id: 2,
      icon: <HeartPulse size={32} />,
      title: 'Health Insurance',
      description: 'Access quality healthcare for you and your family with our tailored medical insurance plans from top providers.'
    },
    {
      id: 3,
      icon: <Shield size={32} />,
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future and protect their standard of living in the event of unforeseen circumstances.'
    },
    {
      id: 4,
      icon: <Home size={32} />,
      title: 'Property Insurance',
      description: 'Safeguard your home, belongings, and real estate investments against fire, theft, and natural disasters.'
    },
    {
      id: 5,
      icon: <Briefcase size={32} />,
      title: 'Business Insurance',
      description: 'Protect your enterprise with customized coverage including liability, property, and employee benefits.'
    },
    {
      id: 6,
      icon: <Plane size={32} />,
      title: 'Travel Insurance',
      description: 'Travel with confidence knowing you are covered for medical emergencies, trip cancellations, and lost luggage.'
    },
    {
      id: 7,
      icon: <Activity size={32} />,
      title: 'Personal Accident',
      description: 'Financial support and compensation in the event of accidental injury, disability, or worse.'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading 
          title="Our Premium Insurance Solutions" 
          subtitle="What We Offer" 
          alignment="center" 
        />
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
