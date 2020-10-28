import React from "react";
import "./Book.scss";

import ProgressBar from './ProgressBar';
const Book = ({ name, author, cover, completed }) => {
	
	let btnText = "";
	if (completed === 100) {
		btnText = "Read Again";
	} else if (completed < 100) {
		btnText = "Continue";
	}
	return (
		<div className="book">
			<div className="book-cover">
				<div className="book-cover-overlay">
					<button className="book-cover-overlay-btn">{btnText}</button>
				</div>
				<img src={cover} className="book-cover-img" alt="bookcover" />
			</div>
			<ProgressBar complete={completed}/>
			<h4 className="book-name">{name}</h4>
			<p className="book-author">{author}</p>
		</div>
	);
};

export default Book;
