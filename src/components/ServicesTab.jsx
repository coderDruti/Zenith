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
              {/* Eye shape forming the top arch of the heart */}
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              {/* Inner sparkle star representing visual recognition */}
              <path
                d="M12 8.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
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
            // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
            //   <rect x="50" y="50" width="412" height="412" rx="80" fill="none" stroke-width="6" />
            //     <g stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none">
            //       <rect x="135" y="216" width="40" height="80" rx="12" />
            //       <path d="M 155 296 L 170 360 L 210 360 L 195 302" />
            //       <path d="M 175 220 L 295 160" />
            //       <path d="M 175 292 L 295 352" />
            //       <ellipse cx="295" cy="256" rx="16" ry="96" />
            //       <path d="M 295 220 A 36 36 0 0 1 295 292" />
            //       <path d="M 345 190 A 76 76 0 0 1 345 322" />
            //     </g>
            // </svg>
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
              {/* Double border shield / emblem */}
              <circle cx="12" cy="12" r="10" strokeDasharray="3,3" />
              <circle cx="12" cy="12" r="8" />
              {/* Handshake vector inside emblem */}
              <path d="M8 11.5l2 2 4.5-4.5" />
              <path d="M16 12.5l-2-2-4.5 4.5" />
              {/* Sparkle sparkles representing prestige and impression */}
              <path
                d="M19 5l.5 1 .9.5-1 .5-.5.9-.5-.9-.9-.5.9-.5.5-1z"
                fill="currentColor"
                stroke="none"
              />
              <path
                d="M4 18l.3.7.7.3-.7.3-.3.7-.3-.7-.7-.3.7-.3.3-.7z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
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
              {/* Speech bubble outline */}
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              {/* Confetti explosion */}
              <circle cx="14" cy="10" r="2" fill="currentColor" stroke="none" />
              <circle cx="18" cy="14" r="2" fill="currentColor" stroke="none" />
              <circle cx="10" cy="16" r="2" fill="currentColor" stroke="none" />
            </svg>
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
