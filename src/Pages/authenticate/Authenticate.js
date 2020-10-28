import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Authenticate.scss";

const Authenticate = ({ img, phone, code, setCode }) => {
	const [seconds, setSeconds] = useState(10);
	const [isActive, setIsActive] = useState(false);
	const history = useHistory();


	const toggle = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
		if (seconds === 0) {
			toggle();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [seconds]);

	const resendCodeHandler = () => {
		toggle();
		setSeconds(10);
	};
	const submitCodeHandler = (e) => {
		e.preventDefault();
		const codeArray = [];
		e.target.code.forEach((codeVal, index) => {
			codeArray[index] = codeVal.value;
		});
		setCode(codeArray.join(""));
		history.push(`/del`)
	};
	return (
		<div className="Authenticate">
			<div className="Authenticate-indicator">
				<div className="Authenticate-indicator-dots Authenticate-indicator-dots-1"></div>
				<div className="Authenticate-indicator-dots Authenticate-indicator-dots-2"></div>
				<div className="Authenticate-indicator-dots Authenticate-indicator-dots-3"></div>
				<div className="Authenticate-indicator-dots Authenticate-indicator-dots-4"></div>
			</div>
			<img src={img} className="Authenticate-main-img" alt="" />
			<h1 className="Authenticate-title">Authentication</h1>
			<p className="Authenticate-text">
				we have sent a message on <span>+91 {phone}</span>. Check your inbox and
				enter the four digit number
			</p>
			<form className="Authenticate-form" onSubmit={submitCodeHandler}>
				<div className="Authenticate-form-group">
					<input
						type="text"
						name="code"
						className="Authenticate-form-input-code"
						autoComplete="off"
						maxLength="1"
					/>
					<input
						type="text"
						name="code"
						className="Authenticate-form-input-code"
						autoComplete="off"
						maxLength="1"
					/>
					<input
						type="text"
						name="code"
						className="Authenticate-form-input-code"
						autoComplete="off"
						maxLength="1"
					/>
					<input
						type="text"
						name="code"
						className="Authenticate-form-input-code"
						autoComplete="off"
						maxLength="1"
					/>
				</div>
				<button type="submit" className="Authenticate-form-code-btn">
					Verify
				</button>
			</form>

			{isActive ? (
				<p className="Authenticate-resend" onClick={resendCodeHandler}>
					Resend
				</p>
			) : (
				<p>Resend Code in 0:{seconds}</p>
			)}
		</div>
	);
};
export default Authenticate;
