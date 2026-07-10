import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I request an insurance quotation?',
      answer: 'Requesting a quote is easy. You can fill out the contact form on our website, call us directly at +250 781 832 859, or message us on WhatsApp. We typically respond with a tailored quotation within 24 hours.'
    },
    {
      question: 'Which insurance products are available in Rwanda?',
      answer: 'We provide access to a wide range of products including Motor Insurance (Comprehensive and Third-Party), Health Insurance, Life Insurance, Property Insurance, Travel Insurance, and specialized Business coverage.'
    },
    {
      question: 'Can businesses get custom insurance coverage?',
      answer: 'Yes, we specialize in providing tailored insurance packages for businesses of all sizes in Rwanda. From public liability to workers compensation and property protection, we can structure a plan that covers all your corporate risks.'
    },
    {
      question: 'How long does the policy issuance process take?',
      answer: 'For standard policies like Motor and Travel insurance, coverage can often be activated on the same day. More complex policies, such as comprehensive Business or Life insurance, may take a few days for underwriting and assessment.'
    },
    {
      question: 'Do you charge a fee for your consultation services?',
      answer: 'Our initial consultation and quote generation services are completely free. We act as your agent to find you the best rates from reputable insurance companies in Rwanda.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section faq section-bg-white">
      <div className="container">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Clear Answers" 
          alignment="center" 
        />
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <h4 className="faq-question">{faq.question}</h4>
                <div className="faq-toggle">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              <div className="faq-body">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
