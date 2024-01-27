import styled from 'styled-components';

export const QuizModalWrapper = styled.div`
	max-width: 800px;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	border: 1px solid #ccc;
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-items: center;
	padding: 20px 10px;
`;

export const QuizModalImage = styled.img`
	width: 300px;
	height: 300px;
	object-fit: cover;
`;

export const QuizModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;

export const QuizModalTitle = styled.h2`
	font-family: 'Russo One',sans-serif;
	font-size: 30px;
	font-weight: bold;
	color: #333;
	text-align: center;
`;

export const QuizModalDescription = styled.p`
	font-size: 18px;
	color: #333;
	text-align: justify;
`;
