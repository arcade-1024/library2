import React from "react";
import { Link } from "react-router-dom";
import "./Fingerprint.scss";

//img
import finger from "../../assets/icon/fingerprint.svg";

const Fingerprint = ({ img }) => {
	return (
		<div className="Fingerprint">
			<div className="Fingerprint-indicator">
				<div className="Fingerprint-indicator-dots Fingerprint-indicator-dots-1"></div>
				<div className="Fingerprint-indicator-dots Fingerprint-indicator-dots-2"></div>
				<div className="Fingerprint-indicator-dots Fingerprint-indicator-dots-3"></div>
				<div className="Fingerprint-indicator-dots Fingerprint-indicator-dots-4"></div>
			</div>
			<img src={img} className="Fingerprint-main-img" alt="" />
			<h1 className="Fingerprint-title">Fingerprint</h1>
			<p className="Fingerprint-text">Add your fingerprint for more security</p>
			<img src={finger} className="Fingerprint-finger-img" alt="" />
			<br />
			<Link to="/success">
				<button className="Fingerprint-continue-btn">Continue</button>
			</Link>
			<Link className="Fingerprint-link" to="/success">
				<p className="Fingerprint-skip">Skip this step</p>
			</Link>
		</div>
	);
};

export default Fingerprint;
