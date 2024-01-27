import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	height: 70px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ebebeb;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		height: 60px;
	}
`;

export const HeaderContainer = styled.div`
	max-width: 1540px;
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const Title = styled.h2`
	font-family: 'Russo One', sans-serif;
	font-size: 40px;
	font-weight: 700;
	color: #1b1b1b;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;

export const CustomizedLogo = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;

	@media (max-width: 768px) {
		width: 50px;
		height: 50px;
	}
`;
