import "../styles/ScoreCard.css";

const ScoreCard = ({ scores, reasoning }) => {

    if (!scores || !reasoning) return null;

    const ProgressBar = ({ label, value }) => (

        <div className="progress-item">

            <div className="progress-header">

                <span>{label}</span>

                <span>{value}%</span>

            </div>

            <div className="progress-bar">

                <div

                    className="progress-fill"

                    style={{ width: `${value}%` }}

                ></div>

            </div>

        </div>

    );

    return (

        <div className="score-card">

            <h2>AI Analysis Scores</h2>

            <div className="overall-score">

                <div className="score-circle">

                    {scores.investmentScore}

                </div>

                <div>

                    <h3>Overall Investment Score</h3>

                    <p>

                        Rule-Based Score : {scores.rawScore}/60

                    </p>

                </div>

            </div>

            <div className="reasoning">

                <ProgressBar

                    label="Business Quality"

                    value={reasoning.businessQuality}

                />

                <ProgressBar

                    label="Financial Health"

                    value={reasoning.financialHealth}

                />

                <ProgressBar

                    label="Growth Potential"

                    value={reasoning.growthPotential}

                />

                <ProgressBar

                    label="Valuation"

                    value={reasoning.valuation}

                />

                <ProgressBar

                    label="News Sentiment"

                    value={reasoning.newsSentiment}

                />

            </div>

        </div>

    );

};

export default ScoreCard;