import { useState } from "react";
import api from "../services/api.js";
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import RecommendationCard from "../components/RecommendationCard";
import FinancialCard from "../components/FinancialCard";
import ScoreCard from "../components/ScoreCard";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";
import "../styles/Home.css";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (company) => {
    try {
      setLoading(true);
      setError("");
      setData(null);
      const response = await api.post("/analyze", { company });
      setData(response.data);
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      {/* ---------- Hero Section ---------- */}
      <header className="home-header">
        <h1>
          <span className="gradient-text">StockSage AI</span>
        </h1>
        <p className="subtitle">
          AI-powered insights • Financial health • Smart recommendations
        </p>
        <p className="description">
          Enter a company name and get a complete breakdown — from financials and
          scores to the latest news and a clear investment recommendation.
        </p>
        <div className="header-divider" />
      </header>

      {/* ---------- Search Bar ---------- */}
      <SearchBar onSearch={handleSearch} loading={loading} />

      {/* ---------- Loading ---------- */}
      {loading && (
        <div className="loading-wrapper">
          <Loading />
          <p className="loading-text">Fetching the latest data…</p>
        </div>
      )}

      {/* ---------- Error ---------- */}
      {error && (
        <div className="error-container">
          <span className="error-icon">⚠️</span>
          <h2 className="error">{error}</h2>
        </div>
      )}

      {/* ---------- Results ---------- */}
      {data && (
        <main className="results-grid">
          <CompanyCard research={data.research} />
          <RecommendationCard recommendation={data.recommendation} />
          <FinancialCard financials={data.financials} />
          <ScoreCard
            scores={data.scores}
            reasoning={data.recommendation.reasoning}
          />
          <NewsCard news={data.news} />
        </main>
      )}

      {/* ---------- Footer (optional) ---------- */}
      <footer className="home-footer">
        <p>
          Powered by <span className="accent-text">AI</span> &nbsp;·&nbsp; Data
          refreshed in real‑time
        </p>
      </footer>
    </div>
  );
};

export default Home;