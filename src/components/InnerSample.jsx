import React, { useState } from "react";

export default function InnerSample(props) {
	const [show, setShow] = useState(false);
	const checkEvent = (e) => {
		e.target.checked === true ? setShow(true) : setShow(false);
	};
	return (
		<>
			<div className="d-flex" style={{ listStyle: "none" }}>
				<input type="checkbox" className="d-inline" onChange={checkEvent} />
				<li>{props.value}</li>
				<button
					className="btn btn-outline-primary btn-sm "
					style={{ display: show ? "inline" : "none" }}
					onClick={() => {
						props.deleteHandler(props.id);
					}}>
					Button
				</button>
			</div>
		</>
	);
}
