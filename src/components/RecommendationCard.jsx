import "../styles/RecommendationCard.css";

const RecommendationCard = ({ recommendation }) => {

    if (!recommendation) return null;

    const getBadgeClass = () => {

        switch (recommendation.recommendation) {

            case "STRONG INVEST":
                return "strong";

            case "INVEST":
                return "invest";

            case "HOLD":
                return "hold";

            default:
                return "pass";
        }

    };

    return (

        <div className="recommendation-card">

            <div className="recommendation-header">

                <h2>AI Recommendation</h2>

                <span className={`badge ${getBadgeClass()}`}>

                    {recommendation.recommendation}

                </span>

            </div>

            <div className="recommendation-grid">

                <div className="recommend-box">

                    <h4>Investment Score</h4>

                    <p>{recommendation.investmentScore}/100</p>

                </div>

                <div className="recommend-box">

                    <h4>Confidence</h4>

                    <p>{recommendation.confidence}%</p>

                </div>

                <div className="recommend-box">

                    <h4>Risk Level</h4>

                    <p>{recommendation.riskLevel}</p>

                </div>

                <div className="recommend-box">

                    <h4>Time Horizon</h4>

                    <p>{recommendation.timeHorizon}</p>

                </div>

            </div>

            <div className="summary-box">

                <h3>Summary</h3>

                <p>

                    {recommendation.summary}

                </p>

            </div>

            <div className="pros-cons">

                <div className="pros">

                    <h3>Key Positives</h3>

                    <ul>

                        {

                            recommendation.keyPositives.map((item, index) => (

                                <li key={index}>

                                    ✅ {item}

                                </li>

                            ))

                        }

                    </ul>

                </div>

                <div className="cons">

                    <h3>Key Concerns</h3>

                    <ul>

                        {

                            recommendation.keyConcerns.map((item, index) => (

                                <li key={index}>

                                    ⚠️ {item}

                                </li>

                            ))

                        }

                    </ul>

                </div>

            </div>

        </div>

    );

};

export default RecommendationCard;