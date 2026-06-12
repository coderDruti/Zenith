import ServiceCard from './ServiceCard';

function ServicesTab() {
  return (
    <div className="tab-content-wrapper">
      <h2 className="section-title">Our Expertise</h2>
      <p className="section-subtitle">
        EXCEPTIONAL SERVICES FOR EXTRAORDINARY MOMENTS
      </p>

      <div className="services-grid services-tab-grid">
        {/* Branding Card: Heart with sparkle star (feel + see) */}
        <ServiceCard
          icon={
            <img src='/brands-svgrepo-com.svg' style={{width:"40px", height:"40px"}}/>
          }
          title="Branding"
          desc="Branding that people don't just see ---- they feel"
        >
          <div className="card-stats">
            <div className="card-stat-item">
              <div className="card-stat-num">200+</div>
              <div className="card-stat-label">Successful Activations</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">25+</div>
              <div className="card-stat-label">Partner Brands</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">17+</div>
              <div className="card-stat-label">Years of Excellence</div>
            </div>
          </div>
        </ServiceCard>

        {/* Digital Marketing Card: Megaphone emitting signals connecting to a physical location pin (online -> ground) */}
        <ServiceCard
          icon={
            <img
              src="/megaphone-svgrepo-com.svg"
              alt="Digital Marketing Icon"
              style={{ width: "40px", height: "40px", color: "currentColor" }}
            />
          }
          title="Digital Marketing"
          desc="Digital Marketing that doesn't stay online ---- it comes alive on ground"
        >
          <div className="card-stats">
            <div className="card-stat-item">
              <div className="card-stat-num">15+</div>
              <div className="card-stat-label">Campaigns Managed</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">20K</div>
              <div className="card-stat-label">Audience Reach</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">90%</div>
              <div className="card-stat-label">Avg. Engagement Growth</div>
            </div>
          </div>
        </ServiceCard>

        {/* Corporate Events Card: Spotlight beams over corporate handshake / award badge (business + impression) */}
        <ServiceCard
          icon={
            <img src='/corporate-svgrepo-com.svg' color='currentColor' style={{width:"40px", height:"40px"}}/>
          }
          title="Corporate Events"
          desc="Corporate events that mean business and leave an impression."
        >
          <div className="card-stats">
            <div className="card-stat-item">
              <div className="card-stat-num">60+</div>
              <div className="card-stat-label">Events Executed</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">30+</div>
              <div className="card-stat-label">Business Clients</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">92%</div>
              <div className="card-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </ServiceCard>
        {/* Social Events Card: Speech bubble with confetti explosion (connect + celebrate) */}
        <ServiceCard
          icon={
            <img src='/chat-message-conversation-2-svgrepo-com.svg' style={{width:"40px", height:"40px"}}/>
          }
          title="Social Events"
          desc="Social events that connect people and create celebration."
        >
          <div className="card-stats">
            <div className="card-stat-item">
              <div className="card-stat-num">100+</div>
              <div className="card-stat-label">Events Hosted</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">30K</div>
              <div className="card-stat-label">People Joined</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">98%</div>
              <div className="card-stat-label">Happy Clients</div>
            </div>
          </div>
        </ServiceCard>

        {/* Videography/Photography Card: Camera shutter play button icon */}
        <ServiceCard
          icon={
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
              <path d="M11 11l3 2-3 2v-4z" fill="currentColor" />
              <circle cx="18" cy="9" r="1" fill="currentColor" stroke="none" />
            </svg>
          }
          title="Videography/Photography"
          desc="Capturing moments with creativity and precision, we turn every frame into a story that reflects the emotion, energy, and essence of your event."
        >
          <div className="card-stats">
            <div className="card-stat-item">
              <div className="card-stat-num">20+</div>
              <div className="card-stat-label">Shoots Completed</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">10K</div>
              <div className="card-stat-label">Photos & Videos Delivered</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">92%</div>
              <div className="card-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </ServiceCard>

        {/* Zenithians Card: Shield with 'Z' and premium sparkles */}
        <ServiceCard
          icon={
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path
                d="M9 8h6l-6 8h6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4l.5 1 .9.5-1 .5-.5.9-.5-.9-.9-.5.9-.5.5-1z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          }
          title="Zenithians"
          desc="Become a Zenithian today and unlock year-round value beyond the event. The Zenithian subscription is designed to give students real savings with trusted lifestyle and retail partners."
        >
          <div className="card-stats">
            <div className="card-stat-item">
              <div className="card-stat-num">200+</div>
              <div className="card-stat-label">Active Members</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">25+</div>
              <div className="card-stat-label">Partner Brands</div>
            </div>
            <div className="card-stat-item">
              <div className="card-stat-num">Premium</div>
              <div className="card-stat-label">Experiences Guaranteed</div>
            </div>
          </div>
        </ServiceCard>
      </div>
    </div>
  );
}

export default ServicesTab;
