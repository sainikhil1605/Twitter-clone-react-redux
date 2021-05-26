import styled from "styled-components";
export const NavBar = styled.nav`
	display: flex;
	padding: 0px 100px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 8px;
	height: 110px;
	position: relative;
	background-color: white;
	@media screen and (max-width: 760px) {
		padding: 0px 0px;
	}
`;
export const NavLogo = styled.div`
	flex: 1;
	flex-grow: 4;
`;
export const NavItem = styled.div`
	flex: 1;
	padding: auto 0px;
	text-align: center;
	vertical-align: middle;
	position: relative;
`;
export const NavImg = styled.img`
	float: left;
`;
export const NavInnerItem = styled.div`
	position: absolute;
	top: 40%;
`;
