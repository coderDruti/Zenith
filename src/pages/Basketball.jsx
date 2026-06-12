import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logo = "/bounce.png";
const BG = "/ZB 2.mov";

function Basketball() {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="basketball-page">
      {/* Main Container */}
      <div className="basketball-container">
        
        {/* LEFT SECTION (Information with Video Background) */}
        <div className="basketball-left-section">
          {/* Background Video for Left Section */}
          <video
            src={BG}
            autoPlay
            muted
            loop
            playsInline
            className="basketball-bg-video"
          />
          <div className="basketball-video-overlay" />

          {/* Content */}
          <div className="basketball-left-content">
            <div>
              {/* Back to Home Link */}
              <div className="basketball-back-home" onClick={handleGoHome}>
                <span>← Back to Home</span>
              </div>

              {/* Logo as brand/page icon */}
              <div className="basketball-brand-header" onClick={handleGoHome}>
                <img 
                  src={Logo} 
                  alt="logo" 
                  className="basketball-brand-logo" 
                />
                <div>
                  <span className="basketball-brand-subtitle">Zenith Events</span>
                  <h3 className="basketball-brand-title">Street Basketball</h3>
                </div>
              </div>
              
              <h2 className="basketball-hero-title">
                INDIA'S ULTIMATE
                <br />
                <span className="text-gold">STREET BASKETBALL</span>
                <br />
                TOURNAMENT
              </h2>

              <p className="basketball-hero-subtitle">
                FAST GAMES. REAL COMPETITION. PURE PASSION.
              </p>

              {/* Feature Icons */}
              <div className="basketball-feature-grid">
                <div className="basketball-feature-item">
                  <span className="text-gold">🏀</span>
                  <p className="basketball-feature-label">16+ Teams</p>
                </div>

                <div className="basketball-feature-item">
                  <span className="text-gold">🏆</span>
                  <p className="basketball-feature-label">Cash Prizes</p>
                </div>

                <div className="basketball-feature-item">
                  <span className="text-gold">🏟️</span>
                  <p className="basketball-feature-label">Top Courts</p>
                </div>

                <div className="basketball-feature-item">
                  <span className="text-gold">🎥</span>
                  <p className="basketball-feature-label">Live Action</p>
                </div>
              </div>
            </div>

            {/* Event Metadata */}
            <div className="basketball-meta-section">
              <div className="basketball-meta-item">
                <span className="text-gold">📅</span>
                <div>
                  <h4 className="basketball-meta-label">Date</h4>
                  <p className="basketball-meta-value">5th July 2026</p>
                </div>
              </div>

              <div className="basketball-meta-item">
                <span className="text-gold">📍</span>
                <div>
                  <h4 className="basketball-meta-label">Venue</h4>
                  <p className="basketball-meta-value">Chetla Park Athletic Club</p>
                </div>
              </div>

              <div className="basketball-meta-item">
                <span className="text-gold">🏅</span>
                <div>
                  <h4 className="basketball-meta-label">Categories</h4>
                  <p className="basketball-meta-value">Men's | Women's | U18</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Form Card matching Home theme) */}
        <div className="basketball-right-section">
              <img src="/Bounce.jpeg"/>
        </div>
      </div>
    </div>
  );
}

export default Basketball;
