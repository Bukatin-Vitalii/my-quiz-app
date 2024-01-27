import styled from 'styled-components';

export const FooterWrapper = styled.div`
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #ebebeb;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		height: 60px;
	}
`;
