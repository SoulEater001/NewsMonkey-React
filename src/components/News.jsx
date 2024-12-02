import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Angela Yang",
            "title": "'Moana 2' leads in highest-grossing Thanksgiving weekend ever at box office",
            "description": "A week of major movie releases has propelled this holiday stretch to the highest-grossing Thanksgiving weekend ever at the box office.",
            "url": "https://www.nbcnews.com/news/us-news/moana-2-thanksgiving-box-office-record-rcna182346",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-11/241127-moana-vl-1244p-92deac.jpg",
            "publishedAt": "2024-12-01T18:36:22Z",
            "content": "A week of major movie releases has propelled this holiday stretch to the highest-grossing Thanksgiving weekend ever at the box office.\r\nFirst, viewers packed theaters to sing with the witches of Oz a… [+3209 chars]"
        },
        {
            "source": {
                "id": "the-huffington-post",
                "name": "The Huffington Post"
            },
            "author": "Ben Blanchet",
            "title": "Demi Moore Says This '90s Movie Script 'Scared The Crap' Out Of Her",
            "description": "The \"Substance\" star said she was \"overwhelmed\" while reading the script of the film with Patrick Swayze.",
            "url": "https://www.huffpost.com/entry/demi-moore-ghost-1990-hot-ones_n_674c261de4b0dacf5f839b87",
            "urlToImage": "https://img.huffingtonpost.com/asset/674c473318000024009dd3d1.jpeg?cache=YTOUM8APy2&ops=1200_630",
            "publishedAt": "2024-12-01T14:55:53Z",
            "content": "Demi Moore has revealed that the script to the 1990 film Ghost definitely scared the crap out of her.\r\nThe Substance star, in a recent episode of Hot Ones, spilled on the emotional impact of the film… [+1921 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "MORGAN LEE Associated Press",
            "title": "Movie armorer on Alec Baldwin's film 'Rust' pleads guilty to gun charge in separate case",
            "description": "She pleaded guilty to carrying a gun into a license liquor establishment.",
            "url": "https://abcnews.go.com/US/wireStory/movie-armorer-alec-baldwins-film-rust-pleads-guilty-114579606",
            "urlToImage": "https://i.abcnewsfe.com/a/4adc877c-10a5-4294-9d94-d8d6083347a0/wirestory_623ed5fb65687f6f638a0c8a6157ba7f_16x9.jpg?w=1600",
            "publishedAt": "2024-10-07T22:02:57Z",
            "content": "SANTA FE, N.M. -- The weapons supervisor in the fatal shooting of a cinematographer by Alec Baldwin on the set of the Western film Rust\" pleaded guilty Monday to a separate criminal charge of carryin… [+2459 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Matt Patches",
            "title": "Robert Downey Jr. is Iron Man again—for Disney’s big Avengers land rides",
            "description": "He’s Doctor Doom in Marvel movies, but for Marvel’s Avengers Campus, RDJ is back as Tony Stark for Stark Flight Lab and Avengers: Infinity Defense rides.",
            "url": "https://www.polygon.com/24217880/robert-downey-jr-iron-man-avengers-campus-rides",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/PFEKiuJ8uASyOhkKMoh8p-LmRbs=/377x66:1311x555/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25567657/DLR_Avengers_Campus3_1536x666.jpg",
            "publishedAt": "2024-08-11T12:18:45Z",
            "content": "How much of the Marvel Cinematic Universe can one man own? Robert Downey Jr. is on a quest to find out. Despite Marvel casting the actor as Doctor Doom for the upcoming Avengers: Doomsday, Downey Jr.… [+2124 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Matt Patches",
            "title": "Disney’s D23 Snow White trailer unveils Rachel Zegler’s updated princess",
            "description": "Rachel Zegler stars alongside seven CG dwarfs in the race-changing reimagining of the 1937 movie from director Marc Webb. The movie releases next spring.",
            "url": "https://www.polygon.com/24216163/snow-white-trailer-2025-disney-d23",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/NXS3PTuGmM8bFTu2JxqahfhfaKg=/174x0:2443x1188/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25566616/snowwhitedance.jpg",
            "publishedAt": "2024-08-10T04:44:21Z",
            "content": "Rachel Zegler stars alongside seven CG dwarfs"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Zosha Millman, Susana Polo, Petrana Radulovic, Matt Patches",
            "title": "Disney’s D23 2024: All the big trailers and news in one place",
            "description": "Marvel, Star Wars, Pixar, Disney Animation reveal their new movies, tv shows, trailers, and plans for the 2025 and beyond at the Disney version of Comic-Con.",
            "url": "https://www.polygon.com/24217230/d23-news-trailers-disney-marvel-star-wars-2024",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/gjRhYaBLPVsrbhRxccvgvne5tdQ=/0x24:1200x652/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25566500/D23__The_Ultimate_Disney_Fan_Event_Key_Art.jpg",
            "publishedAt": "2024-08-10T02:02:15Z",
            "content": "Hot on the heels of SDCC 2024 comes Disneys giant fan convention, which intends to reveal just as much news about the future of Marvel, Star Wars, Pixar, Disney Animation, and the Disney Parks as a t… [+400 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Collier Jennings",
            "title": "Best Action Movies on Netflix Right Now (September 2022) - IGN",
            "description": "These are the best action movies on Netflix right now -- blockbusters, fight films, animated adventures and shootouts galore.",
            "url": "https://www.ign.com/articles/best-action-movies-on-netflix-right-now",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/07/28/rrr-1659047262112.jpg?width=1280",
            "publishedAt": "2022-09-01T18:03:14Z",
            "content": "There is nothing like a good action movie on Netflix. The perfectly choreographed fight scenes that let you feel every punch and kick on screen; the shootouts that see bullets and bodies hitting the … [+11394 chars]"
        }
    ]
    constructor() {
        super();
        // console.log("Hello, I am from news component");
        this.state = {
            articles: this.articles,
            loading: false
        }

    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 44)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default News
