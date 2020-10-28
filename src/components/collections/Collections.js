import React from "react";
import "./Collections.scss";

import Option from './option/Option';
const Collections = ({ collections }) => {
	return (
		<div className="collections">
			<div className="collections-header">
				<h2 className="collections-header-title">Collections</h2>
				<button className="collections-header-btn">
					<p>More +</p>
				</button>
			</div>
			<div className="collections-options">
        {collections.map((collection) => <Option name={collection.name} books={collection.books} key={collection.id}/>)}
			</div>
		</div>
	);
};

export default Collections;
