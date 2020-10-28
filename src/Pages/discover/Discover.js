import React from "react";
import "./Discover.scss";
import Navbar from "../../components/navabar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";
import Card from "./card/Card";
const Discover = ({ cards }) => {
	return (
		<div className="discover">
			<Navbar />
			<SearchBar />
			<h2 className="discover-title">Browse all</h2>
			<div className="discover-grid">
				<br />
				{cards.map((card) => (
					<Card
						name={card.name}
						color1={card.bgColor1}
						color2={card.bgColor2}
					/>
				))}
			</div>
		</div>
	);
};

export default Discover;
