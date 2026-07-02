'use client';

import { useState } from 'react';
import styles from './page.module.css';

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Setup typically takes 1-2 business days. Our team will handle the entire onboarding process, including integrating with your existing clinic management software and training your staff."
  },
  {
    question: "Will this work with my existing software?",
    answer: "Yes, DentTick AI integrates with most major dental practice management software. We support custom integrations for our Pro and custom plan users."
  },
  {
    question: "Is patient data secure?",
    answer: "Absolutely. We employ bank-level encryption and follow strict HIPAA and local data protection guidelines to ensure all patient data remains confidential and secure."
  },
  {
    question: "Do I need to manage WhatsApp myself?",
    answer: "No, our AI handles incoming queries and appointment bookings automatically over WhatsApp. Your team can always step in and take over a conversation if needed."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, our standard plans are month-to-month and you can cancel at any time without any hidden fees."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on our Starter and Growth plans so you can experience the value of DentTick AI before committing."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button 
            className={styles.faqQuestion} 
            onClick={() => toggleOpen(index)}
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <svg 
              className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${styles.faqAnswer} ${openIndex === index ? styles.faqAnswerOpen : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
