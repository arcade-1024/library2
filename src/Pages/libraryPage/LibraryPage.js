import React from "react";

//components
import Navbar from "../../components/navabar/Navbar";
import MyBook from "../../components/myBook/MyBook";
import Collections from "../../components/collections/Collections";
import Popular from "../../components/popular/Popular";

const LibraryPage = ({ name, bookData, collections, popular }) => {
	return (
		<div>
			<Navbar name={name} />
			<MyBook bookData={bookData} />
			<Collections collections={collections} />
			<Popular popularChoices={popular}/>
		</div>
	);
};

export default LibraryPage;
