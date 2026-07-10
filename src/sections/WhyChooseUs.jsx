import React from 'react';
import { ShieldCheck, Clock, ThumbsUp, UserCheck, Headset, Star, Eye, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Trusted Guidance',
      description: 'Expert advice you can rely on to secure your financial future.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Quick Support',
      description: 'Fast and responsive assistance whenever you need it.'
    },
    {
      icon: <ThumbsUp size={28} />,
      title: 'Personalized Recommendations',
      description: 'Tailored insurance solutions that fit your specific profile.'
    },
    {
      icon: <UserCheck size={28} />,
      title: 'Professional Consultation',
      description: 'In-depth analysis by experienced insurance agents.'
    },
    {
      icon: <Star size={28} />,
      title: 'Reliable Assistance',
      description: 'We are with you every step of the way, especially during claims.'
    },
    {
      icon: <Headset size={28} />,
      title: 'Customer-Focused Service',
      description: 'Your peace of mind is our highest priority.'
    },
    {
      icon: <Eye size={28} />,
      title: 'Transparent Process',
      description: 'No hidden clauses. Clear, straightforward insurance policies.'
    },
    {
      icon: <Zap size={28} />,
      title: 'Fast Communication',
      description: 'Seamless communication across all our channels.'
    }
  ];

  return (
    <section id="why-us" className="section why-choose-us">
      <div className="container">
        <SectionHeading 
          title="Why Choose Gasana Insurance" 
          subtitle="Our Advantage" 
          alignment="center" 
          light={true}
        />
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h4 className="reason-title">{reason.title}</h4>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
