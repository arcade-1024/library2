import React from "react";
import { useHistory } from "react-router-dom";

import "./Details.scss";

const Details = ({ setAddress, setPassword, setName }) => {
	const history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		setName(e.target.fullName.value);
		setAddress(e.target.address.value);
		setPassword(e.target.password[0].value);

		history.push(`/fig`);
	};
	return (
		<div className="Details">
			<div className="Details-indicator">
				<div className="Details-indicator-dots Details-indicator-dots-1"></div>
				<div className="Details-indicator-dots Details-indicator-dots-2"></div>
				<div className="Details-indicator-dots Details-indicator-dots-3"></div>
				<div className="Details-indicator-dots Details-indicator-dots-4"></div>
			</div>
			<h1 className="Details-title">
				Yey,fill the details & we are getting closer.
			</h1>
			<form className="Information-form" onSubmit={submitHandler}>
				<div className="Information-form-group">
					<label htmlFor="fullName"> Full Name</label>
					<input
						type="text"
						name="fullName"
						className="Information-form-input"
						autoComplete="off"
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						name="address"
						className="Information-form-input"
						autoComplete="off"
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="password">New password</label>
					<input
						type="password"
						name="password"
						className="Information-form-input"
						autoComplete="off"
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="password">Confirm Password</label>
					<input
						type="password"
						name="password"
						className="Information-form-input"
						autoComplete="off"
					/>
				</div>
				<button type="submit" className="Information-form-btn">
					Continue
				</button>
			
			</form>
		</div>
	);
};
export default Details;
