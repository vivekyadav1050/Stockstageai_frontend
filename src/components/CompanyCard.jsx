import "../styles/CompanyCard.css";

const CompanyCard = ({ research }) => {
  if (!research) return null;

  return (
    <div className="company-card glass-card">
      {/* ---- Header ---- */}
      <div className="company-header">
        <div className="company-name">
          <h2 className="company-title">{research.companyName}</h2>
          <span className="company-ticker">{research.ticker}</span>
        </div>
        <div className="company-exchange">
          {research.exchange}
        </div>
      </div>

      {/* ---- Meta info (sector / industry / country) ---- */}
      <div className="company-meta">
        <div className="meta-item">
          <span className="meta-label">Sector</span>
          <span className="meta-value">{research.sector}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Industry</span>
          <span className="meta-value">{research.industry}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Country</span>
          <span className="meta-value">{research.country}</span>
        </div>
      </div>

      {/* ---- Business Summary ---- */}
      <div className="company-summary">
        <h3 className="section-title">📄 Business Summary</h3>
        <p className="summary-text">{research.businessSummary}</p>
      </div>

      {/* ---- Strengths & Risks ---- */}
      <div className="strength-risk-grid">
        <div className="strength-box">
          <h3 className="strength-title">✅ Strengths</h3>
          <ul className="strength-list">
            {research.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="risk-box">
          <h3 className="risk-title">⚠️ Risks</h3>
          <ul className="risk-list">
            {research.risks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;