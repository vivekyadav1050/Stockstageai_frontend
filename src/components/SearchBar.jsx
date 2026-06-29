import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch, loading }) => {

    const [company, setCompany] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!company.trim()) return;

        onSearch(company);

    };

    return (

        <div className="search-container">

            <h1>AI Investment Research Agent</h1>

            <p>Analyze any Indian or US listed company</p>

            <form onSubmit={handleSubmit} className="search-form">

                <input
                    type="text"
                    placeholder="Enter Company Name (e.g. TCS, Tesla, Apple)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <button type="submit" disabled={loading}>

                    {loading ? "Analyzing..." : "Analyze"}

                </button>

            </form>

        </div>

    );

};

export default SearchBar;