import React from "react";
import "./Option.scss";

const Option = ({ name, books }) => {
	return (
		<div className="option">
			<h1 className="option-title">{name}</h1>
			<div className="option-book">
				<p className="option-book-count">{books}</p>
			</div>
		</div>
	);
};

export default Option;
