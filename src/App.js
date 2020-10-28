import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.scss";

//pages
import Buffer from "./Pages/buffer/Buffer";
import LoginPage from "./Pages/loginPage/LoginPage";
import Information from "./Pages/information/Information";
import Authenticate from "./Pages/authenticate/Authenticate";
import Details from "./Pages/details/Details";
import Fingerprint from "./Pages/fingerprint/Fingerprint";
import SuccessPage from "./Pages/successPage/SuccessPage";
import LibraryPage from "./Pages/libraryPage/LibraryPage";
import Discover from "./Pages/discover/Discover";
import MyCollections from "./Pages/myCollections/MyCollections";
import Admin from "./Pages/admin/Admin";

//images
import toStar from "./assets/icon/step_to_the_sun.svg";
import accessAccount from "./assets/icon/Access_account.svg";
import secureLogin from "./assets/icon/secure_login.svg";
import secureSheild from "./assets/icon/Security_on.svg";
import img1 from "./assets/img/1.png";
import img2 from "./assets/img/2.png";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
import img5 from "./assets/img/5.png";
import popImg1 from "./assets/img/pop1.png";
import popImg2 from "./assets/img/pop2.png";
import popImg3 from "./assets/img/pop3.png";
import popImg4 from "./assets/img/pop4.png";
import Collections from "./components/collections/Collections";
// import Popular from "./components/popular/Popular";

function App() {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");
	const [name, setName] = useState("");

	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [myBooks, setMyBooks] = useState([
		{
			id: 1,
			name: "Educated",
			author: "Tara Westover",
			photo: img1,
			progress: 70,
		},
		{
			id: 2,
			name: "The Neighbourhood",
			author: "Mario vargas Llosa",
			photo: img2,
			progress: 60,
		},
		{
			id: 3,
			name: "The Afterlives",
			author: "Thomas pierce",
			photo: img3,
			progress: 50,
		},
		{
			id: 4,
			name: "The Blue Flower",
			author: "Raymond Queneau",
			photo: img4,
			progress: 50,
		},
		{
			id: 5,
			name: "Heart spring mountain",
			author: "Robin Mac Aurthur",
			photo: img5,
			progress: 100,
		},
	]);
	const [allBooks, setAllBooks] = useState([
		{
			id: 1,
			name: "Educated",
			author: "Tara Westover",
			photo: img1,
		},
		{
			id: 2,
			name: "The Neighbourhood",
			author: "Mario vargas Llosa",
			photo: img2,
		},
		{
			id: 3,
			name: "The Afterlives",
			author: "Thomas pierce",
			photo: img3,
		},
		{
			id: 4,
			name: "The Blue Flower",
			author: "Raymond Queneau",
			photo: img4,
		},
		{
			id: 5,
			name: "Heart spring mountain",
			author: "Robin Mac Aurthur",
			photo: img5,
		},
	]);
	const [collections, setCollections] = useState([
		{ id: 1, name: "Design", books: 23 },
		{ id: 2, name: "Fiction", books: 44 },
		{ id: 3, name: "Crime", books: 55 },
		{ id: 4, name: "Thriller", books: 104 },
	]);
	const [popular, setPopular] = useState([
		{
			id: 1,
			name: "Mothers stories",
			likes: 224,
			dislikes: 12,
			star: 4.5,
			img: popImg1,
		},
		{
			id: 2,
			name: "We cast a shadow",
			likes: 454,
			dislikes: 112,
			star: 4.5,
			img: popImg2,
		},
		{
			id: 3,
			name: "Bangkok to rain",
			likes: 124,
			dislikes: 102,
			star: 4.5,
			img: popImg3,
		},
		{
			id: 4,
			name: "Crossing",
			likes: 224,
			dislikes: 12,
			star: 4.5,
			img: popImg4,
		},
	]);

	const [discoverCards, setDiscoverCard] = useState([
		{ id: 1, name: "New releases", bgColor1: "#00F260", bgColor2: "#0575E6" },
		{ id: 2, name: "Discover", bgColor1: "#FBAB7E", bgColor2: "#F7CE68" },
		{ id: 3, name: "Charts", bgColor1: "#c94b4b", bgColor2: "#E0C3FC" },
		{ id: 4, name: "Culture", bgColor1: "#23074d", bgColor2: "#cc5333" },
		{ id: 5, name: "Made for you", bgColor1: "#00b09b", bgColor2: "#96c93d" },
		{ id: 6, name: "Wellness", bgColor1: "#ff9966", bgColor2: "#ff5e62" },
		{ id: 7, name: "Classical", bgColor1: "#396afc", bgColor2: "#ff5e62" },
		{ id: 8, name: "Folk", bgColor1: "#1c92d2", bgColor2: "#29ffc6" },
		{ id: 9, name: "Anime", bgColor1: "#396afc", bgColor2: "#FFAF7B" },
		{ id: 10, name: "Studies", bgColor1: "#EF3B36", bgColor2: "#fff" },
	]);
	
	return (
		<div className="App">
			<BrowserRouter>
				<Buffer img={toStar} />
				<Route
					exact={true}
					path="/"
					component={() => <LoginPage setName={setName}  />}
				/>
				<Route
					exact={true}
					path="/info"
					component={() => (
						<Information
							img={accessAccount}
							email={email}
							phone={phone}
							setEmail={setEmail}
							setPhone={setPhone}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/auth"
					component={() => (
						<Authenticate
							img={secureLogin}
							phone={phone}
							code={code}
							setCode={setCode}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/del"
					component={() => (
						<Details
							setName={setName}
							setAddress={setAddress}
							setPassword={setPassword}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/fig"
					component={() => <Fingerprint img={secureSheild} />}
				/>
				<Route exact={true} path="/success" component={SuccessPage} />
				<Route
					exact={true}
					path="/lib"
					component={() => (
						<LibraryPage
							name={name}
							bookData={myBooks}
							collections={collections}
							popular={popular}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/discover"
					component={() => <Discover cards={discoverCards} />}
				/>
				<Route
					exact={true}
					path="/collection"
					component={() => <MyCollections />}
				/>
				<Route
					exact={true}
					path="/admin"
					component={() => (
						<Admin
							allBooks={allBooks}
							setAllBooks={setAllBooks}
							Discover={discoverCards}
							setDiscover={setDiscoverCard}
							collections={collections}
							setCollections={setCollections}
							popularBooks={popular}
							setPopular={setPopular}
						/>
					)}
				/>
			</BrowserRouter>
		</div>
	);
}

export default App;
