import styled from 'styled-components';

export const QuizzesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 20px;

	@media (max-width: 991px) {
		justify-content: center;
	}
`;

export const ErrorText = styled.p`
	color: #d10000;
	font-size: 15px;
	text-align: center;
	width: 100%;
`;
