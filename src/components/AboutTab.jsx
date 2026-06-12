import React from 'react';

function AboutTab() {
  const stats = [
    { num: "500+", label: "Events Executed" },
    { num: "40+", label: "Years Experience" },
    { num: "50+", label: "Awards Won" },
    { num: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="tab-content-wrapper about-layout-tab">
      <div className="about-tab-intro">
        <h2 className="section-title">About Zenith</h2>
        <p className="section-subtitle">
          FROM VISION TO VICTORY — EMPOWERING BRANDS AND CELEBRATING MILESTONES SINCE 2009
        </p>
        
        <p className="about-paragraph">
          Zenith Events & Financial Consultancy is a premier, multi-disciplinary agency based in Kolkata. 
          We specialize in bridging the worlds of strategic brand activations, bespoke event production, 
          and corporate advisory. Our unique dual expertise enables us to execute events that captivate 
          audiences while ensuring they deliver strong returns and brand value.
        </p>
        <p className="about-paragraph">
          From high-energy corporate summits and tech staging to intimate social gala celebrations, 
          we take pride in seamless planning, logistics, and unmatched execution quality.
        </p>
      </div>

      {/* Grid displaying the requested stats */}
      <div className="about-stats-grid">
        {stats.map((item, index) => (
          <div className="about-stat-card" key={index}>
            <div className="about-stat-number">{item.num}</div>
            <div className="about-stat-title">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTab;
