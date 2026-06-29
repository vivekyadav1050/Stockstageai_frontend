import "../styles/NewsCard.css";

const NewsCard = ({ news }) => {

    if (!news) return null;

    return (

        <div className="news-card">

            <h2>Latest News</h2>

            {
                news.length === 0 ?

                    <div className="no-news">

                        <h3>No Recent News Found</h3>

                        <p>
                            No relevant company news is available at the moment.
                        </p>

                    </div>

                    :

                    <div className="news-grid">

                        {

                            news.map((article, index) => (

                                <div
                                    key={index}
                                    className="news-item"
                                >

                                    <h3>

                                        {article.title}

                                    </h3>

                                    <p>

                                        {article.description || "No description available."}

                                    </p>

                                    <div className="news-footer">

                                        <span>

                                            {article.source}

                                        </span>

                                        <span>

                                            {

                                                new Date(article.publishedAt)

                                                    .toLocaleDateString()

                                            }

                                        </span>

                                    </div>

                                    <a

                                        href={article.url}

                                        target="_blank"

                                        rel="noreferrer"

                                    >

                                        Read More →

                                    </a>

                                </div>

                            ))

                        }

                    </div>

            }

        </div>

    );

};

export default NewsCard;