import React from "react";
import { useHistory } from "react-router-dom";
import "./Information.scss";
const Information = ({ img, setEmail, setPhone, email, phone }) => {
	const history = useHistory();
	const SubmitHandler = (e) => {
		e.preventDefault();
		setEmail(e.target.emailAddress.value);
		setPhone(e.target.phoneNumber.value);
		history.push(`/auth`);
	};
	console.log(phone);
	return (
		<div className="Information">
			<div className="Information-indicator">
				<div className="Information-indicator-dots Information-indicator-dots-1"></div>
				<div className="Information-indicator-dots Information-indicator-dots-2"></div>
				<div className="Information-indicator-dots Information-indicator-dots-3"></div>
				<div className="Information-indicator-dots Information-indicator-dots-4"></div>
			</div>
			<img src={img} className="Information-main-img" alt="" />
			<h1 className="Information-title">
				Please Fill your email and phone Number
			</h1>
			<form className="Information-form" onSubmit={SubmitHandler}>
				<div className="Information-form-group">
					<label htmlFor="emailAddress"> Email Address</label>
					<input
						type="text"
						name="emailAddress"
						className="Information-form-input"
						autoComplete="off"
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="phoneNumber">Phone Numebr</label>
					<input
						type="text"
						name="phoneNumber"
						className="Information-form-input"
						autoComplete="off"
					/>
					<button type="submit" className="Information-form-btn">
						Continue
					</button>
				</div>
			</form>
		</div>
	);
};
export default Information;
