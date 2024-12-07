import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const { country = "us", pageSize = 8, category = "general" } = props;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }

    //componentDidMount()
    useEffect(() => {
        updateNews();
    }, [])

    const handlePreviousClick = async () => {
        setPage(page - 1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        updateNews();
    }

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        // setArticles([...articles, ...parsedData.articles]);
        setTotalResults(parsedData.totalArticles);
        setLoading(false);
    };

    const uniqueArticles = articles.filter(
        (article, index, self) =>
            index === self.findIndex((t) => t.url === article.url)
    );
    return (
        <>
            <h1 className='text-center' style={{ margin: "35px 0px" }}>NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {uniqueArticles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element?.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue"} newsUrl={element.url} author={element.author || "Unknown"} date={element.publishedAt} source={element.source.name || ""} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
// News.defaultProps = {
//     country: "us",
//     pageSize: "8",
//     category: "general",
// } -> Default parameter is prefered nowdays

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
}
export default News
