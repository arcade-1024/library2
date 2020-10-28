import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
	height: 4px;
	width: 200px;
	background-color: #ccc;
	border-radius: 2px;
`;
const ContainerDiv = styled.div`
	margin: 20px 0 10px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const ProgressBar = ({ complete }) => {
	const InnerDiv = styled.div`
		height: 100%;
		width: ${complete}%;
		background-color: #2bff88;
		border-radius: 2px;
	`;
	return (
		<div>
			<ContainerDiv>
				<OuterDiv>
					<InnerDiv></InnerDiv>
				</OuterDiv>
				<p>{complete}%</p>
			</ContainerDiv>
		</div>
	);
};

export default ProgressBar;
