function ServiceCard({ icon, title, desc, children }) {
  return (
    <div className="service-card">
      <div className="service-icon-box">
        {icon}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{desc}</p>
      {children}
    </div>
  );
}

export default ServiceCard;
