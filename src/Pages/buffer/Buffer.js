import React, { useEffect } from "react";
import "./Buffer.scss";

//img
import logo from "../../assets/icon/bold.svg";

const Buffer = ({ img }) => {
	useEffect(() => {
		setTimeout(() => {
			const reg = document.querySelector(".Buffer");
			reg.style.display = "None";
		}, 2000);
	}, []);
	return (
		<div className="Buffer">
			<div className="Buffer-logo">
				<img className="Buffer-logo-img" src={logo} alt="" />
				<p className="Buffer-logo-name">ookZila</p>
			</div>
			<p className="Buffer-tagline">Read all your heart desire</p>
			<img className="Buffer-img" src={img} alt="" />
			<div class="loader-circle">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Buffer;
