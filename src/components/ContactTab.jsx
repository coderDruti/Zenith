import React, { useState } from 'react';

function ContactTab() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Financial Advisory',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Financial Advisory', message: '' });
    }, 5000);
  };

  return (
    <div className="tab-content-wrapper">
      <h2 className="section-title">Reach Our Advisors</h2>
      <p className="section-subtitle">
        Connect with our Kolkota office for custom corporate events design or corporate advisory programs.
      </p>

      <div className="contact-layout">
        <div className="contact-info-panel">
          <div className="info-item">
            <div className="info-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="info-content">
              <h4>Corporate Office</h4>
              <p>9 Deshapriya Park Road, Lake Market, Kolkata - 700026</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="info-content">
              <h4>Electronic Mail</h4>
              <p>reachus@zefc.in / event@zefc.in</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="info-content">
              <h4>Contact Lines</h4>
              <p>+91 8582888324 / +91 8582888393 / +91 8017387358</p>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          {formSubmitted ? (
            <div className="success-banner">
              <h4>Thank You!</h4>
              <p>Your inquiry has been successfully sent to Zenith Advisors. We will respond within 24 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="form-input" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Department</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="form-select"
                    value={formData.service}
                    onChange={handleFormChange}
                  >
                    <option value="Financial Advisory">Financial Advisory</option>
                    <option value="Event Planning">Event Management</option>
                    <option value="Brand Consultation">Brand Consultation</option>
                    <option value="General Support">General Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="form-textarea" 
                  placeholder="Please describe your requirements..."
                  value={formData.message}
                  onChange={handleFormChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactTab;
