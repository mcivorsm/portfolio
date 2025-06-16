import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_b4i7oaa',     
      'template_e3tz7xh',    
      form.current,
      'fuhp-8rEYbV_033Hy'         
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again later.');
      console.error(error.text);
    });
  };
//more nabby
  return (
    <div style={containerStyles}>
      <h2 style={headerStyles}>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} style={formStyles}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyles}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyles}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={textareaStyles}
        ></textarea>
        <button type="submit" style={buttonStyles}>Send</button>
      </form>
    </div>
  );
}

// Styles
const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  maxWidth: '600px',
  padding: '20px',
  boxSizing: 'border-box'
};

const headerStyles = {
  fontSize: '2rem',
  marginBottom: '10px'
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '15px'
};

const inputStyles = {
  padding: '15px',
  fontSize: '1.1rem',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const textareaStyles = {
  padding: '15px',
  fontSize: '1.1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  minHeight: '150px',
  resize: 'vertical'
};

const buttonStyles = {
  padding: '15px',
  fontSize: '1.1rem',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default ContactForm;
