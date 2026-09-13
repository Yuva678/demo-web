import { useState, useEffect } from 'react';
import { COMPANY } from '../config';
import { getWhatsAppUrl } from '../utils/whatsapp';
import '../styles/Contact.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  requirement: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us — PrimeNest Realty';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — show success state
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            Whether you have a specific property in mind or need help finding
            the right home, we'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          {/* Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="contact-success" role="status">
                <div className="contact-success-icon" aria-hidden="true">✓</div>
                <h3>Thank you for your enquiry</h3>
                <p>
                  This is a demo website — your enquiry was not actually sent.
                  In a live setup, the PrimeNest team would respond within
                  24 hours.
                </p>
                <button
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-requirement">Property / Requirement</label>
                  <input
                    type="text"
                    id="contact-requirement"
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    placeholder="e.g. 3 BHK in Whitefield"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="contact-info">
            <div className="contact-info-item">
              <h3>Office</h3>
              <p>{COMPANY.address}</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>{COMPANY.phone}</p>
            </div>
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
            </div>
            <div className="contact-info-item">
              <h3>Hours</h3>
              <p>{COMPANY.hours}</p>
            </div>
            <a
              href={getWhatsAppUrl(
                "Hi, I'd like to discuss my property requirements with PrimeNest."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Chat on WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
