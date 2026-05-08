import React, { useEffect, useState, useCallback } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country,
  pageSize,
  category,
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = useCallback(async () => {
    setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a27af9e9abda4ed5bf134e4262496f81&page=${page}&pageSize=${pageSize}`;

    setLoading(true);
    setProgress(30);

    let data = await fetch(url);
    let parsedData = await data.json();

    setProgress(70);

    if (parsedData.articles) {
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    }

    setLoading(false);
    setProgress(100);
  }, [country, category, pageSize, setProgress, page]);

  useEffect(() => {
    document.title = `${capitalizeFirst(category)} - bonNews`;
    updateNews();
  }, [category, updateNews]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a27af9e9abda4ed5bf134e4262496f81&page=${nextPage}&pageSize=${pageSize}`;

    setPage(nextPage);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles((prevArticles) =>
      prevArticles.concat(parsedData.articles)
    );

    setTotalResults(parsedData.totalResults);
  };

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

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
