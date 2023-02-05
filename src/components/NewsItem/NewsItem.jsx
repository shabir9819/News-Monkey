import axios from "axios";
import React, { Component } from "react";

export class NewsItem extends Component {
	// constructor(){
	//   super();
	//   this.state = {
	//     fontSize : "12px",
	//     transform:"translate(-85%,-50%)",
	//     zIndex:"1"
	//   }
	//   setInterval (() => {
	//     this.setState = {
	//       fontSize : "14px",
	//     transform:"translate(-85%,-50%)",
	//     zIndex:"1"
	//     }
	//   }, 2000)
	//   ;
	//   }

	render() {
		let { title, description, imageUrl, url, author, date, source } =
			this.props;
		return (
			<div className="card ">
				<img
					src={
						!imageUrl
							? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU"
							: imageUrl
					}
					className="card-img-top"
					alt="..."
					style={{ height: "10rem" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{!title? "" : title.slice(0, 40)}....</h5>
					<span
						className="position-absolute top-0 start-100  badge rounded-pill bg-danger"
						style={{
							transform: "translate(-100%, -41%)",
							zIndex: "1",
						}}>
						{!source ? "" : source}
					</span>
					<p className="card-text">
						{description != null ? description.slice(0, 88) : "No Description"}
						....
					</p>
					<p className="card-text">
						<small className="text-muted">
							By {!author ? "Unknown" : author} on{" "}
							{!date ? "-" : new Date(date).toGMTString()}
						</small>
					</p>
					<a
						href={url}
						target="_blank"
						className="btn btn-outline-primary btn-sm">
						Read more
					</a>
				</div>
			</div>
		);
	}
}

export default NewsItem;
