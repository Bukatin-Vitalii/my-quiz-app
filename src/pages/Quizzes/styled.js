import styled from 'styled-components';

export const QuizzesWrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 20px;
	height: calc(100vh - 140px);
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #c1c1c1;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}

	@media (max-width: 991px) {
		justify-content: center;
	}

	@media (max-width: 768px) {
		height: calc(100vh - 120px);
	}
`;

export const ErrorText = styled.p`
	color: #d10000;
	font-size: 15px;
	text-align: center;
	width: 100%;
`;
