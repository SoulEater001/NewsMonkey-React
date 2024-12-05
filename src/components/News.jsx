import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from "prop-types"

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        // console.log("Hello, I am from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;

    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false });
    }

    async componentDidMount() {
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false });
        this.updateNews();

    }

    handlePreviousClick = async () => {
        // console.log("next");
        // if (this.state.page > 1) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page - 1,
        //         loading: false
        //     });
        // }
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }

    handleNextClick = async () => {
        // console.log("next");
        // if (this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)) {
        //     // console.log("No more pages to load");
        // }
        // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     // console.log(parsedData);
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading: false
        //     });
        // }
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }

    render() {
        // let { pageSize, country } = this.props;
        // console.log("render")
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: "35px 0px" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element?.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name ? element.source.name : ""} />
                        </div>
                    })}
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
