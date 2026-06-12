function Header({ activeTab, setActiveTab }) {
  return (
    <header className="app-header">
      <a className="logo-container" onClick={() => setActiveTab('home')}>
        <img src="/zefc_logo.svg" alt="Zenith Logo" className="logo-img"/>
      </a>

      {/* Navigation Capsules (Wireframe Outlined Pills) */}
      <nav className="nav-group">
        <button 
          className={`nav-capsule ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          className={`nav-capsule ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={`nav-capsule ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        <button 
          className={`nav-capsule ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button 
          className={`nav-capsule ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          Milestones
        </button>
        <button 
          className={`nav-capsule ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;
