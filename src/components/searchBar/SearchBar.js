import React from "react";
import "./SearchBar.scss";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";
const SearchBar = () => {
	return (
		<div className="searchbar">
			<Icon className="searchbar-icon" icon={search} />
			<input type="text" className="searchbar-input" />
		</div>
	);
};

export default SearchBar;
