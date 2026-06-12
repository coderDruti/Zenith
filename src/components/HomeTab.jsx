import React from 'react';

function HomeTab({ setActiveTab }) {
  return (
    <div className="tab-content-wrapper hero-content">
      <div className="hero-text-side">
        <h1 className="hero-main-title">
          <span className="glow-text">Crafting UNFORGETABLE Experiences</span>
        </h1>
        <p className="hero-desc">
          High impact brand activation, designing and executing corporate and non-corporate events since 2009
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => setActiveTab('services')}>
            Our Services
          </button>
          <button className="btn-secondary" onClick={() => setActiveTab('events')}>
            Our Events
          </button>
        </div>
      </div>
      <div className="hero-visual-side">
        <div className="geometry-wrapper">
          <div className="spinning-ring"></div>
          <div className="spinning-ring-inner"></div>
          <div className="center-core">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="12" />
              <line x1="12" y1="12" x2="22" y2="8.5" />
              <line x1="12" y1="12" x2="2" y2="8.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTab;
