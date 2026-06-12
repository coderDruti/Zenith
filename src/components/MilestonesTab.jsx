import React from 'react';

function MilestonesTab() {
  return (
    <div className="tab-content-wrapper">
      <h2 className="section-title">Milestones & Trust</h2>
      <p className="section-subtitle">
        Over a decade of bringing projects to life and helping businesses map paths to sustainable financial growth.
      </p>

      <div className="about-layout">
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-num">500+</div>
            <div className="stat-label">Events Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">$150M+</div>
            <div className="stat-label">Corporate Funds Advised</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">17+ Yrs</div>
            <div className="stat-label">Industry Leadership</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">98.5%</div>
            <div className="stat-label">Client Retention</div>
          </div>
        </div>

        <div className="about-text">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="quote-text">
                "Zenith managed our national product launch and helped us structure our growth strategy. Their dual competence in financial logic and creative events is unparalleled."
              </p>
              <div className="client-info">
                <div className="client-avatar">RK</div>
                <div>
                  <p className="client-name">Rajesh Khandelwal</p>
                  <p className="client-company">Director, Khandelwal Ventures Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MilestonesTab;
