import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = ({
  country = "in",
  pageSize = 8,
  category = "general",
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    try {
      setProgress(10);

      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=${pageSize}&apikey=${process.env.REACT_APP_GNEWS_API}`;
      setLoading(true);

      setProgress(30);

      const response = await fetch(url);
      const parsedData = await response.json();

      console.log(parsedData);

      setProgress(70);

      setArticles(parsedData.articles || []);

      setLoading(false);

      setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirst(category)} - bonNews`;
    updateNews();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container my-3">
        <h2
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "70px" }}
        >
          bonNews - Top {capitalizeFirst(category)} Headlines
        </h2>

        {loading && <Spinner />}

        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <Newsitem
                    title={element.title || ""}
                    description={element.description || ""}
                    imgUrl={element.image}
                    newsUrl={element.url}
                    author={element.source?.name}
                    date={element.publishedAt}
                    source={element.source?.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
