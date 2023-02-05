import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
	static defaultProp = {
		country: "in",
		pageSize: 3,
		category: "general",
	};
	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};
	textCapitalize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};
	constructor(props) {
		super(props);
		console.log("hello i am constructor");
		this.state = {
			articles: [],
			loading: false,
			pageNumber: 1,
		};
		document.title = `${this.textCapitalize(
			this.props.category
		)} - News Monkey`;
	}

	updateNews = async () => {
		this.props.setProgress(30)
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`;
		this.setState({ loading: true });
		this.props.setProgress(60)
		await setTimeout(async()=>{let data = await fetch(url);
		let parseData = await data.json();
		console.log(parseData);
		this.props.setProgress(90)
		this.setState({ loading: false });
		await this.props.setProgress(100);
		this.setState({
			articles: parseData.articles,
			totalArticles: parseData.totalResults,
		});},500)
	};

	async componentDidMount() {
		this.updateNews();
	}

	handlePrevEvent = async () => {
		this.setState({
			pageNumber: this.state.pageNumber - 1,
		});
		this.updateNews();
	};
	handleNextEvent = async () => {
		this.setState({
			pageNumber: this.state.pageNumber + 1,
		});
		this.updateNews();
	};

	fetchMoreData = () => {
		this.setState({ pageNumber: this.state.pageNumber + 1 });
		setTimeout(async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`;
			this.setState({ loading: true });
			let data = await fetch(url);
			let parseData = await data.json();
			console.log(parseData);
			this.setState({
				articles: this.state.articles.concat(parseData.articles),
				totalArticles: parseData.totalResults,
				loading: false,
			});
			console.log(this.state.articles);
		}, 1500);
	};

	render() {
		return (
			<>
				{console.log("render")}
				<h1 className="text-center my-2 mx-3">{`News Monkey - Top ${this.textCapitalize(
					this.props.category
				)}  Headlines`}</h1>
				{/* {this.state.loading && <Spinner />} */}

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Spinner />}>
					<div className="container my-3">
						<div className="row">
							{this.state.articles.map((element, index) => {
								return (
									<div className="col-md-4 my-2" key={index}>
										<NewsItem
											title={element.title}
											description={element.description}
											imageUrl={element.urlToImage}
											url={element.url}
											author={element.author}
											date={element.publishedAt}
											source={element.source.name}
										/>
									</div>
								);
							})}
						</div>

						{/* <div className="container d-flex justify-content-between">
          <button disabled = {this.state.pageNumber<=1} type="button" className ="btn btn-outline-primary btn-sm" onClick={this.handlePrevEvent}>&larr; Prev</button>
          <button disabled ={(this.state.pageNumber + 1  > Math.ceil(this.state.totalArticles/this.props.pageSize))} type="button" className ="btn btn-outline-primary btn-sm" onClick={this.handleNextEvent}>Next 	&rarr;</button>
          </div> */}
					</div>
				</InfiniteScroll>
			</>
		);
	}
}

export default News;
