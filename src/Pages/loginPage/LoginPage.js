import React /*, { useState } */ from "react";
import Icon from "react-icons-kit";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import { Link, useHistory } from "react-router-dom";

import "./LoginPage.scss";

const LoginPage = ({ setName }) => {
	const history = useHistory();

	const formSubmitHandler = (e) => {
		e.preventDefault();
		// setName(e.target.username.value);
		history.push(`/lib`);
	};

	return (
		<div className="LoginPage">
			<h1 className="LoginPage-greet">Hello</h1>
			<p>Sign in to Continue</p>
			<form className="LoginPage-form" onSubmit={formSubmitHandler}>
				<div className="LoginPage-icons">
					<i class="fas fa-user"></i>
					<input
						type="text"
						name="username"
						placeholder="Name"
						className="LoginPage-icons-input"
					/>
				</div>
				<div className="LoginPage-icons">
					<i class="fas fa-at"></i>
					<input
						type="text"
						name="email"
						placeholder="Email Address"
						className="LoginPage-icons-input"
					/>
				</div>
				<button className="LoginPage-btn">
					<Icon icon={arrowRight} />
				</button>
				<Link className="LoginPage-Link" to="/info">
					<p>Sign up now</p>
				</Link>
			</form>
		</div>
	);
};
export default LoginPage;
