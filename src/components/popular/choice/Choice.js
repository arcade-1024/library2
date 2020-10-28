import React from "react";
import "./Choice.scss";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/fa/heart";
import { thumbsDown } from "react-icons-kit/fa/thumbsDown";
import { star } from "react-icons-kit/fa/star";
import { starHalfEmpty } from "react-icons-kit/fa/starHalfEmpty";
import { bookmark } from "react-icons-kit/fa/bookmark";
const Choice = ({ name, likes, dislikes, star, cover }) => {
	let starDisplay = [];
	const starRoundOff = parseInt(star);

	for (let index = 0; index < starRoundOff; index++) {
		starDisplay.push(<Icon className="checked" icon={star} />);
	}
	if (star - starRoundOff > 0) {
		starDisplay.push(<Icon className="checked" icon={starHalfEmpty} />);
	}
	console.log(starDisplay[0]);
	return (
		<div className="choice">
			<div className="choice-cover">
				<div className="choice-cover-overlay">
					<button className="choice-cover-overlay-btn">Read</button>
				</div>
				<img src={cover} className="choice-cover-img" alt="" />
			</div>
			<h3 className="choice-name">{name}</h3>
			<div className="choice-btns">
				<div className="choice-btns-col">
					<Icon className="choice-btns-col-thumbup" icon={heart} />
					<p>({likes})</p>
					<Icon className="choice-btns-col-thumbdown" icon={thumbsDown} />
					<p>({dislikes})</p>
				</div>
				<div className="choice-btns-stars">
					<Icon className="choice-btns-stars-bookmark" icon={bookmark} />
				</div>
			</div>
		</div>
	);
};

export default Choice;
