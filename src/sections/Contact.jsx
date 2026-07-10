import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading 
          title="Get a Free Quote" 
          subtitle="Contact Us" 
          alignment="center" 
        />
        
        <div className="contact-grid">
          
          <div className="contact-info">
            <h3 className="contact-subtitle">We're Here to Help</h3>
            <p className="contact-text">
              Reach out to Gasana Insurance Sales Agent today for professional advice and a personalized insurance quotation.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+250 781 832 859</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+250 781 832 859</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">Request a Consultation</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="insuranceType">Insurance Type</label>
                <select id="insuranceType" required>
                  <option value="">Select Insurance Type</option>
                  <option value="motor">Motor Insurance</option>
                  <option value="health">Health Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="property">Property Insurance</option>
                  <option value="business">Business Insurance</option>
                  <option value="travel">Travel Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              
              <Button type="submit" variant="primary" fullWidth>Send Request</Button>
            </form>
          </div>
          
        </div>
        
        {/* Google Map Placeholder */}
        <div className="map-container">
          <div className="map-placeholder">
            <MapPin size={48} className="map-pin-icon" />
            <p>Interactive Map of Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
