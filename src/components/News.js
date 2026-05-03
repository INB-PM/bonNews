/* eslint-disable react/jsx-no-undef */
import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${this.captileFirst(props.category)} - bonNews`;

  const captileFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const upadateNews =  async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=a27af9e9abda4ed5bf134e4262496f81&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedata = await data.json();
    props.setProgress(70);

    setarticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setLoading(false);
    
    props.setProgress(100);

  }
  
  useEffect(() => {
  document.title = `${captileFirst(props.category)} - bonNews`;
    upadateNews();
  },[])


  // const handleNextclick = async () => {
  //   // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

  //   //     console.log("handleNextclick");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a27af9e9abda4ed5bf134e4262496f81&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();

  //   // this.setState({
  //   //     page : this.state.page + 1,
  //   //     articles : parsedata.articles,
  //   //     loading: false,
  //   // })
  //   setpage(page+1);
  //   upadateNews();
  // };

  // const handlePrevclick = async () => {
  //   // console.log("handlePrevclick");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a27af9e9abda4ed5bf134e4262496f81&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});

  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();

  //   // this.setState({
  //   //     page : this.state.page - 1,
  //   //     articles : parsedata.articles,
  //   //     loading: false,
  //   // })
  //   setpage(page-1);
  //   upadateNews();
  // };

const fetchMoreData = async () => {
    // this.setState({page: this.state.page + 1})
    
    let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=a27af9e9abda4ed5bf134e4262496f81&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setpage(page+1);
      let data = await fetch(url);
      let parsedata = await data.json();
  
      setarticles(articles.concat(parsedata.articles));
      settotalResults(parsedata.totalResults);
      
};

    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{margin:'35px 0px', marginTop:'70px'}}>
            bonNews - Top {captileFirst(props.category)} Headline
          </h2>
          {/* <Spinner/> */}
          {loading && <Spinner/>}

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
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : " "
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
          {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
                </div> */}
        </div>
      </>
    );
}


News.defaultProps = {
  name: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
