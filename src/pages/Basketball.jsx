import { useState } from "react";

const Logo = "/bounce.png";
const BG = "/ZB 2.mov";


function Basketball() {
  const [formData, setFormData] = useState({
    teamName: "",
    captain: "",
    email: "",
    phone: "",
    city: "",
    category: "",
    player1: "",
    player2: "",
    player3: "",
    substitute: "",
  });

  const [message, setMessage] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  const [payment, setPayment] = useState(null);
  const [paymentPreview, setPaymentPreview] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.teamName ||
      !formData.captain ||
      !formData.email ||
      !formData.player1
    ) {
      setMessage("Please fill all required fields");
      return;
    }

    setMessage("Registering team...");

    try {
      const submitData = new FormData();
      
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      if (logo) {
        submitData.append("logo", logo);
      }
      if (payment) {
        submitData.append("payment", payment);
      }

      const response = await fetch("/api/register", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message || "Team Registered Successfully 🏀");

      setFormData({
        teamName: "",
        captain: "",
        email: "",
        phone: "",
        city: "",
        category: "",
        player1: "",
        player2: "",
        player3: "",
        substitute: "",
      });
      setLogo(null);
      setLogoPreview("");
      setPayment(null);
      setPaymentPreview("");
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Error registering team. Please try again.");
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handlePaymentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPayment(file);
      setPaymentPreview(URL.createObjectURL(file));
    }
  };

  const handleGoHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
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
          <form onSubmit={handleSubmit} className="basketball-form">
            <h1 className="basketball-form-title">
              TEAM <span className="text-gold">REGISTRATION</span>
            </h1>

            <div className="basketball-form-grid">
              <input
                name="teamName"
                placeholder="Team Name"
                value={formData.teamName}
                onChange={handleChange}
                className="basketball-input"
                required
              />

              <input
                name="captain"
                placeholder="Captain Name"
                value={formData.captain}
                onChange={handleChange}
                className="basketball-input"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="basketball-input"
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="basketball-input"
              />

              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="basketball-input"
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="basketball-select"
              >
                <option value="">Select Category</option>
                <option>Men's Open</option>
                <option>Women's Open</option>
                <option>U18</option>
              </select>
            </div>

            <div>
              <h2 className="basketball-section-subheader">Team Members</h2>
              <div className="basketball-form-grid">
                <input
                  name="player1"
                  placeholder="Player 1 (Required)"
                  value={formData.player1}
                  onChange={handleChange}
                  className="basketball-input"
                  required
                />

                <input
                  name="player2"
                  placeholder="Player 2"
                  value={formData.player2}
                  onChange={handleChange}
                  className="basketball-input"
                />

                <input
                  name="player3"
                  placeholder="Player 3"
                  value={formData.player3}
                  onChange={handleChange}
                  className="basketball-input"
                />

                <input
                  name="substitute"
                  placeholder="Substitute"
                  value={formData.substitute}
                  onChange={handleChange}
                  className="basketball-input"
                />
              </div>
            </div>

            <div className="basketball-form-grid">
              {/* Logo Upload */}
              <label className="basketball-upload-label">
                {logoPreview ? (
                  <img src={logoPreview} alt="Team Logo" className="basketball-upload-thumb" />
                ) : (
                  <>
                    <span className="basketball-upload-icon">🖼️</span>
                    <span className="basketball-upload-text">Upload Logo</span>
                  </>
                )}
                <input type="file" hidden accept="image/*" onChange={handleLogoUpload} />
              </label>

              {/* Payment Upload */}
              <label className="basketball-upload-label">
                {paymentPreview ? (
                  <img src={paymentPreview} alt="Payment" className="basketball-upload-thumb" />
                ) : (
                  <>
                    <span className="basketball-upload-icon">🧾</span>
                    <span className="basketball-upload-text">Payment Screenshot</span>
                  </>
                )}
                <input type="file" hidden accept="image/*" onChange={handlePaymentUpload} />
              </label>
            </div>

            <button
              type="submit"
              className="basketball-submit-btn"
            >
              Register Team
            </button>
            
            {message && (
              <p className={`basketball-message ${
                message.includes("Error") || message.includes("Please") ? "error" : "success"
              }`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Basketball;
