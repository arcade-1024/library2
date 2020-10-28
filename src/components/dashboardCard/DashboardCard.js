import React from "react";
import styled from "styled-components";

import "./DashboardCard.scss";
const DashboardCard = (props) => {
	const DashboardDiv = styled.div`
		background: linear-gradient(
			to bottom right,
			${props.color1},
			${props.color2}
		);
	`;
	return (
		<DashboardDiv className="dashboard-card">{props.children}</DashboardDiv>
	);
};

export default DashboardCard;
