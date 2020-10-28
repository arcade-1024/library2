import React from "react";
import styled from "styled-components";
import "./Card.scss";
const Card = ({ name, color1, color2 }) => {
	const CardDiv = styled.div`
		background: linear-gradient(to bottom left, ${color1}, ${color2});
		
	`;
	return (
		<CardDiv className="card">
			<p className="card-title">{name}</p>
		</CardDiv>
	);
};

export default Card;
