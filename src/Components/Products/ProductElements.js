import styled from "styled-components";

export const Outdiv = styled.div`
	display: flex;
	margin: 50px 50px;
	height: 100vh;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 8px;
	background-color: white;
	flex-wrap: wrap;
	@media screen and (max-width: 760px) {
		flex-wrap: wrap;
		margin: 0px 0px;
		flex-direction: column;
		height: fit-content;
	}
`;
export const ImgDiv = styled.div`
	height: 100%;
	align-content: center;
	/* position: relative; */
	flex: 2;
	border-right: 3px solid rgb(230, 231, 232);
`;
export const ProdImg = styled.img`
	padding: 10px;
	width: 75%;
	height: 75%;
	/* position: absolute;
	left: 10%;
	top: 10%; */
	margin: 0px auto;
`;
export const TextDiv = styled.div`
	flex: 2;
	text-align: center;
	align-items: center;
`;
