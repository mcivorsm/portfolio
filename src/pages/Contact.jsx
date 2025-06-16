import React from 'react';
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <div style={pageStyles}>
      <ContactForm />
    </div>
  );
}

const pageStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // full viewport height
  backgroundColor: '#f9f9f9' // optional: light background
};

export default Contact;
