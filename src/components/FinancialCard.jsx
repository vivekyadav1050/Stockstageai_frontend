import "../styles/FinancialCard.css";

const FinancialCard = ({ financials }) => {

    if (!financials) return null;

    const formatCurrency = (value) => {

        if (!value) return "N/A";

        if (value >= 1_000_000_000_000)
            return (value / 1_000_000_000_000).toFixed(2) + " T";

        if (value >= 1_000_000_000)
            return (value / 1_000_000_000).toFixed(2) + " B";

        if (value >= 1_000_000)
            return (value / 1_000_000).toFixed(2) + " M";

        return value.toLocaleString();

    };

    return (

        <div className="financial-card">

            <h2>Financial Overview</h2>

            <div className="financial-grid">

                <div className="financial-item">
                    <h4>Current Price</h4>
                    <p>{financials.currentPrice} {financials.currency}</p>
                </div>

                <div className="financial-item">
                    <h4>Market Cap</h4>
                    <p>{formatCurrency(financials.marketCap)}</p>
                </div>

                <div className="financial-item">
                    <h4>P/E Ratio</h4>
                    <p>{financials.peRatio?.toFixed(2)}</p>
                </div>

                <div className="financial-item">
                    <h4>EPS</h4>
                    <p>{financials.eps?.toFixed(2)}</p>
                </div>

                <div className="financial-item">
                    <h4>Book Value</h4>
                    <p>{financials.bookValue?.toFixed(2)}</p>
                </div>

                <div className="financial-item">
                    <h4>Revenue</h4>
                    <p>{formatCurrency(financials.revenue)}</p>
                </div>

                <div className="financial-item">
                    <h4>Total Debt</h4>
                    <p>{formatCurrency(financials.totalDebt)}</p>
                </div>

                <div className="financial-item">
                    <h4>Total Cash</h4>
                    <p>{formatCurrency(financials.totalCash)}</p>
                </div>

                <div className="financial-item">
                    <h4>Profit Margin</h4>
                    <p>{(financials.profitMargins * 100).toFixed(2)}%</p>
                </div>

                <div className="financial-item">
                    <h4>Operating Margin</h4>
                    <p>{(financials.operatingMargins * 100).toFixed(2)}%</p>
                </div>

                <div className="financial-item">
                    <h4>ROE</h4>
                    <p>{(financials.returnOnEquity * 100).toFixed(2)}%</p>
                </div>

                <div className="financial-item">
                    <h4>Beta</h4>
                    <p>{financials.beta}</p>
                </div>

            </div>

        </div>

    );

};

export default FinancialCard;