import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <div className="contact-subtitle">Get in touch</div>
        <h1 className="contact-title">Let's work<br />together</h1>
        <p className="contact-desc">
          I'm open to UI/UX and frontend missions, short or long-term. Landing page, full product redesign, or just a second pair of eyes — let's talk.
        </p>
        <div className="contact-links">
          <a href="mailto:jainilsinghvi18@gmail.com">janilsinghvi18@gmail.com</a>
          <a href="https://www.linkedin.com/in/jainil-singhvi-133380307/" target="_blank">linkedin.com/in/jainilsinghvi</a>
          <a href="https://github.com/jainiljj" target="_blank">github.com/jainiljj</a>
        </div>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" placeholder="Jane Smith" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="jane@company.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Project inquiry" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send message &rarr;</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
