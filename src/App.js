import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Sample from "./components/Sample";

export default class App extends Component {
	apiKey = "c57d472df44249be8e18464f78c46ea6"
	pageSize = 6;
	state = {
		progress: 40,
	};

	setProgress = (progress)=>{
		this.setState({progress:progress})
	}


	render() {
		return (
			<>
				<BrowserRouter>
					<LoadingBar
						color="#f11946"
						progress={this.state.progress}
						// onLoaderFinished={() => this.setState({progress:0})}
					/>
					<Navbar />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<News setProgress = {this.setProgress} 
								apiKey = {this.apiKey}
									key={"general"}
									pageSize={this.pageSize}
									country={"in"}
									category={"general"}
								/>
							}
						/>
						<Route
							exact
							path="/business"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"business"}
									pageSize={this.pageSize}
									country={"in"}
									category={"business"}
								/>
							}
						/>
						<Route
							exact
							path="/entertainment"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"entertainment"}
									pageSize={this.pageSize}
									country={"in"}
									category={"entertainment"}
								/>
							}
						/>
						<Route
							exact
							path="/general"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"general"}
									pageSize={this.pageSize}
									country={"in"}
									category={"general"}
								/>
							}
						/>
						<Route
							exact
							path="/health"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"health"}
									pageSize={this.pageSize}
									country={"in"}
									category={"health"}
								/>
							}
						/>
						<Route
							exact
							path="/science"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"science"}
									pageSize={this.pageSize}
									country={"in"}
									category={"science"}
								/>
							}
						/>
						<Route
							exact
							path="/sports"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"sports"}
									pageSize={this.pageSize}
									country={"in"}
									category={"sports"}
								/>
							}
						/>
						<Route
							exact
							path="/technology"
							element={
								<News setProgress = {this.setProgress} apiKey = {this.apiKey}
									key={"technology"}
									pageSize={this.pageSize}
									country={"in"}
									category={"technology"}
								/>
							}
						/>
					</Routes>
				</BrowserRouter>
			</>




			
		);
	}
}
