import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
	gap: 15px;
`;

export const Button = styled.button`
	background-color: #f5f5f5;
	border: 1px solid #000;
	padding: 10px 20px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #e0e0e0;
	}
`;
