// Pages/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',  // Add subject field
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_j6jr2ib',  // The Service ID: This identifies the email service you're using (you need to replace this with your actual service ID from EmailJS).
        'template_g2nx5qw',                // The Template ID: This identifies the email template you want to use (replace '1' with your actual template ID).
        e.target,           // The form element: This refers to the form you're submitting (e.target is the form itself in your case).
        'Ra7g5KnfzvTOgtctS' // The User ID: This is your user-specific key from EmailJS that allows access to the email service (replace this with your actual user ID).
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
        }
      );

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"  // Add subject input
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
