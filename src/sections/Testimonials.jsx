import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jean Paul M.',
      role: 'Business Owner, Kigali',
      content: 'Gasana Insurance made securing coverage for my transport business seamless. Their agent explained everything clearly and got me a much better rate than my previous provider.',
      rating: 5
    },
    {
      id: 2,
      name: 'Aline U.',
      role: 'Homeowner',
      content: 'When I needed property insurance, I felt overwhelmed by the options. Gasana Insurance analyzed my needs and found the perfect policy. Truly a customer-first approach.',
      rating: 5
    },
    {
      id: 3,
      name: 'Eric N.',
      role: 'Freelance Consultant',
      content: 'I highly recommend their health insurance advisory services. They are transparent, fast, and always available on WhatsApp to answer my questions.',
      rating: 5
    }
  ];

  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Client Testimonials" 
          alignment="center" 
        />
        
        <p className="testimonials-disclaimer">
          <em>*Sample Client Testimonials - For illustration purposes</em>
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
