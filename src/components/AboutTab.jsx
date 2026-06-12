import React, { useState } from 'react';

function AboutTab({ setActiveTab }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Vision Discovery",
      desc: "We dive deep into ideas, goals, and desired guest experience to define the heart of the event."
    },
    {
      title: "Concept & Design",
      desc: "We transform your vision into a cohesive theme, aesthetic, and creative blueprint."
    },
    {
      title: "Strategic Planning",
      desc: "We map out timelines, logistics, vendors, and budgets to ensure everything runs seamlessly."
    },
    {
      title: "Flawless Execution",
      desc: "We bring the plan to life on event day with precision, coordination, and calm control."
    },
    {
      title: "Post-Event Wrap",
      desc: "We close out with feedback, settlements, and reflections to capture success and insights."
    }
  ];

  return (
    <div className="tab-content-wrapper about-tab-container">
      {/* OUR STORY SECTION */}
      <div className="about-section about-story-layout">
        <div className="about-text-content">
          <p className="about-label-pre">OUR STORY</p>
          <h2 className="section-title">
            Born From a Passion <span className="text-gold">for Excellence</span>
          </h2>
          <p className="about-desc-paragraph">
            Zenith Events was founded in 2009 with a single vision to transform ordinary moments into extraordinary experiences. What began as a passionate team of creative minds and dedicated event specialists has grown into a trusted event management company delivering innovative, impactful, and flawlessly executed events across diverse industries and occasions.
          </p>
          <p className="about-desc-paragraph">
            From social celebrations and corporate gatherings to brand activations, concerts, and large-scale public events, we bring the same passion, precision, and creativity to every project, ensuring each event is thoughtfully planned and exceptionally delivered.
          </p>
          <p className="about-desc-paragraph">
            At Zenith, we believe every event tells a story. Our purpose is to bring that story to life through meaningful experiences that inspire connections, create lasting memories, and leave a powerful impression.
          </p>
          <button className="btn-primary about-cta-btn" onClick={() => setActiveTab('services')}>
            EXPLORE OUR SERVICES →
          </button>
        </div>

        <div className="about-media-content">
          <div className="about-img-wrapper">
            <img 
              src="/images/story.jpg" 
              alt="Zenith Events in Action" 
              className="about-story-img" 
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' }} 
            />
            <div className="about-badge-card">
              <div className="about-badge-num">17+</div>
              <div className="about-badge-label">YEARS IN BUSINESS</div>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS BAR (From reference image) */}
      <div className="about-stats-bar">
        {[
          { num: "500+", label: "EVENTS EXECUTED" },
          { num: "40+", label: "YEARS EXPERIENCE" },
          { num: "50+", label: "AWARDS WON" },
          { num: "98%", label: "CLIENT SATISFACTION" }
        ].map((item, idx) => (
          <div key={idx} className="about-stat-item-new">
            <div className="about-stat-num-new">{item.num}</div>
            <div className="about-stat-label-new">{item.label}</div>
          </div>
        ))}
      </div>

      {/* VISION & MISSION SECTION */}
      <div className="about-section about-vm-grid">
        <div className="about-vm-card vision-card-new">
          <div className="about-vm-icon">👁️</div>
          <h3 className="about-vm-title">Our Vision</h3>
          <p className="about-vm-text">
            Zenith believes in "From Vision to Victory," i.e. Not only to become a globally recognized name in event management but also to transform ordinary movements into extraordinary experiences. It is the commitment to always set new benchmarks in delivering memorable and impactful events.
          </p>
        </div>

        <div className="about-vm-card mission-card-new">
          <div className="about-vm-icon">🎯</div>
          <h3 className="about-vm-title">Our Mission</h3>
          <p className="about-vm-text">
            To craft extraordinary event experiences through innovative design, flawless execution, and genuine care for our clients — turning every vision into a breathtaking reality.
          </p>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="about-section about-process-section">
        <h2 className="section-title text-center">
          The Zenith <span className="text-gold">Process</span>
        </h2>
        
        <div className="about-process-layout">
          {/* Active Step Details */}
          <div className="about-process-left">
            <span className="about-process-step-num">STEP 0{activeStep + 1}</span>
            <h3 className="about-process-step-title">{steps[activeStep].title}</h3>
            <p className="about-process-step-desc">{steps[activeStep].desc}</p>
          </div>

          {/* Navigation Steps */}
          <div className="about-process-right">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`about-process-nav-item ${i === activeStep ? 'active' : ''}`}
              >
                0{i + 1} — {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="about-section about-gallery-row">
        {[
          "/images/Studio.jpg",
          "/images/corporate.jpg", 
          "/images/Wedding 2.jpg",         
        ].map((img, i) => (
          <div className="about-gallery-item" key={i}>
            <img 
              src={img} 
              alt={`Zenith Event ${i+1}`} 
              className="about-gallery-img"
              onError={(e) => {
                const backups = [
                  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80',
                  'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=80'
                ];
                e.target.src = backups[i];
              }}
            />
          </div>
        ))}
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <div className="about-section about-achievements-section">
        <h2 className="section-title text-center">
          Our <span className="text-gold">Achievements</span>
        </h2>

        <div className="about-achievements-grid">
          {[
            "Best Event Company",
            "5-Star Rated",
            "National Recognition",
            "500+ Happy Families"
          ].map((a, i) => (
            <div key={i} className="about-achievement-card">
              <h3 className="about-achievement-title">{a}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTab;
