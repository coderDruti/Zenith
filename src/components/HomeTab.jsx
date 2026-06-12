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
        <img src='/ZENITH.png'/>
      </div>
    </div>
  );
}

export default HomeTab;
