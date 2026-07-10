import React from 'react';
import SectionHeading from '../components/SectionHeading';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We meet with you to discuss your current situation and financial goals.'
    },
    {
      number: '02',
      title: 'Needs Assessment',
      description: 'We analyze your specific risks to determine the exact coverage you require.'
    },
    {
      number: '03',
      title: 'Insurance Recommendation',
      description: 'We present the best policies from top providers tailored to your needs.'
    },
    {
      number: '04',
      title: 'Quote',
      description: 'You receive a transparent, competitive quotation with no hidden fees.'
    },
    {
      number: '05',
      title: 'Policy Issuance',
      description: 'We handle the paperwork and ensure your policy is activated swiftly.'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'We remain your dedicated partner for renewals, updates, and claims assistance.'
    }
  ];

  return (
    <section id="process" className="section process section-bg-white">
      <div className="container">
        <SectionHeading 
          title="How It Works" 
          subtitle="Our Simple Process" 
          alignment="center" 
        />
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
