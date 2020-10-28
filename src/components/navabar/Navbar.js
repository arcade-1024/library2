import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

//img
import maleAvatar from "../../assets/icon/undraw_male_avatar_323b.svg";
import BookLogo from "../../assets/icon/bold.svg";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={BookLogo} className="navbar-logo-img" alt="" />
			</div>
			<ul className="navbar-link">
				<li className="navbar-link-items">
					<Link className="navbar-link-items-tag" to="/lib">
						Home
					</Link>
				</li>
				<li className="navbar-link-items">
					<Link className="navbar-link-items-tag" to="/discover">
						Discover
					</Link>
				</li>
				<li className="navbar-link-items">
					<Link className="navbar-link-items-tag" to="/collection">
						My Collections
					</Link>
				</li>
			</ul>
			<div className="navbar-profile">
				<div className="navbar-profile-img">
					<img src={maleAvatar} className="navbar-profile-img-male" alt="" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
