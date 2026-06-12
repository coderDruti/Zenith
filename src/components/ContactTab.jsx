function ContactTab() {
  const mailAddress = "reachus@zefc.in"
  const eventAddress = "event@zefc.in"

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
              <p><a href={`mailto:${mailAddress}`}>{mailAddress}</a> / <a href={`mailto:${eventAddress}`}>{eventAddress}</a></p>
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
              <p><a href="tel:+918582888324">+91 8582888324 </a> / <a href="tel:+918582888393"> +91 8582888393</a> / <a href="tel:+918017387358">+91 8017387358</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTab;
