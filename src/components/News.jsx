import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        // console.log("Hello, I am from news component");
        this.state = {
            articles: [],
            loading: false
        }

    }

    async componentDidMount() {
        // console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1971ef4b4a9e423692f48b7a27de0125";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });

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

            </div>
        )
    }
}

export default News
