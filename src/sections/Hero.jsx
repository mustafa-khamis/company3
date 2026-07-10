import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
  const trustBadges = [
    'Professional Advice',
    'Personalized Insurance Solutions',
    'Fast Response',
    'Trusted Service'
  ];

  return (
    <section id="home" className="hero">
      {/* Background with low opacity text */}
      <div className="hero-bg-text">SECURITY</div>
      
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Protect What Matters <span className="text-gradient">Most With Confidence.</span>
          </h1>
          <p className="hero-subtitle">
            Gasana Insurance Sales Agent provides professional, tailored insurance guidance for individuals and businesses across Rwanda. Experience premium protection and total peace of mind.
          </p>
          
          <div className="hero-actions">
            <Button href="#contact" variant="accent" size="lg">Get a Free Quote</Button>
            <Button href="tel:+250781832859" variant="secondary" size="lg" className="btn-outline-white">Call Now</Button>
          </div>

          <div className="hero-trust">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <CheckCircle size={16} className="trust-icon" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-main-image-card animate-fade-in" style={{ animationDelay: '200ms' }}>
            <img src="/heroimage.webp" alt="Professional Insurance" className="hero-main-image" />
          </div>
          <div className="floating-card card-1">
            <div className="card-icon">🛡️</div>
            <div className="card-text">
              <strong>100% Secure</strong>
              <span>Trusted Coverage</span>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">⭐</div>
            <div className="card-text">
              <strong>Premium</strong>
              <span>Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
