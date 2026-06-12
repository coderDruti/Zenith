import React, { useState } from 'react';

function EventsCard({ video, image, icon, title, webpageUrl, posterUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (webpageUrl) {
      window.open(webpageUrl, '_self', 'noopener,noreferrer');
    } else if (posterUrl) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleCloseModal = (e) => {
    e.stopPropagation(); // Prevent triggering card click again
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="events-card" onClick={handleCardClick}>
        {/* Background Video */}
        {video && (
          <video 
            src={video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="events-card-video"
          />
        )}
        {
          image && (
            <img src={image} className="events-card-image"/>
          )
        }
        
        {/* Card Overlay for Readability */}
        <div className="events-card-overlay"></div>

        {/* Card Content */}
        <div className="events-card-content">
          <div className="events-card-icon-box">{icon}</div>
          <h3 className="events-card-title">{title}</h3>
          
          {/* Action indicator */}
          <div className="events-card-action">
            {webpageUrl ? (
              <span className="action-link">Visit Website →</span>
            ) : posterUrl ? (
              <span className="action-link">View Event Poster →</span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Fullscreen Poster Modal */}
      {isModalOpen && posterUrl && (
        <div className="poster-modal-overlay" onClick={handleCloseModal}>
          <div className="poster-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="poster-modal-close" onClick={handleCloseModal} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={posterUrl} 
              alt={`${title} Poster`} 
              className="poster-modal-img" 
            />
          </div>
        </div>
      )}
    </>
  );
}

export default EventsCard;
