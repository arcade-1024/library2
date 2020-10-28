import React from "react";
import "./Popular.scss";

import Choice from "./choice/Choice";

const Popular = ({ popularChoices }) => {
	return (
		<div className="popular">
			<div className="popular-header">
				<h2 className="popular-header-title">Popular</h2>
				<button className="popular-header-btn">
					<p>More +</p>
				</button>
			</div>
			<div className="popular-choices">
				{popularChoices.map((popChoice) => (
					<Choice
						name={popChoice.name}
						likes={popChoice.likes}
						dislikes={popChoice.dislikes}
						star={popChoice.star}
						cover={popChoice.img}
						key={popChoice.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Popular;
