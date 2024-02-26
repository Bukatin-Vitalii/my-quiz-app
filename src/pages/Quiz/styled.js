import styled from 'styled-components';

export const QuizTopWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const QuizImage = styled.img`
	width: 250px;
	height: 250px;
	object-fit: cover;

	@media (max-width: 768px) {
		width: 150px;
		height: 150px;
	}
`;

export const QuizContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;

export const QuizTitle = styled.h2`
	font-family: 'Russo One',sans-serif;
	font-size: 30px;
	font-weight: bold;
	color: #333;
	text-align: center;
`;

export const QuizDescription = styled.p`
	font-size: 18px;
	color: #333;
	text-align: justify;
`;

export const QuizBottomWrapper = styled.div`
	margin-top: 30px;
`;

export const QuizTimer = styled.div`
	font-size: 30px;

	@media (max-width: 768px) {
		font-size: 20px;
		text-align: center;	
	}
`;

export const QuizResult = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	flex-wrap: wrap;
	gap: 20px;
	font-size: 18px;
`;

export const QuizResultGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

export const QuizResultValue = styled.span`
	font-weight: bold;
	font-size: 20px;
`;
