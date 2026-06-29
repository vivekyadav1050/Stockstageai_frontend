import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
        <h2 className="loading-title">Analyzing Company</h2>
        <p className="loading-description">
          Fetching financials, news, and generating AI‑powered insights…
        </p>
        <div className="loading-progress">
          <span className="progress-dot"></span>
          <span className="progress-dot"></span>
          <span className="progress-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;