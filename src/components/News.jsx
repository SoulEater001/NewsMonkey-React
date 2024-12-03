import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        // console.log("Hello, I am from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }

    }

    async componentDidMount() {
        // console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults });

    }

    handlePreviousClick = async () => {
        console.log("next");
        if (this.state.page > 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page - 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page - 1
            });
        }
    }

    handleNextClick = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
            // console.log("No more pages to load");
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1971ef4b4a9e423692f48b7a27de0125&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }
    }

    render() {
        // console.log("render")
        return (
            <div className='container my-3'>
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element?.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=eEnb05ue"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
