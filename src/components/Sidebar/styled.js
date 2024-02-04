import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
	align-items: center;
	border-right: 1px solid #ebebeb;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 0;
	height: 100%;

	@media (max-width: 768px) {
		padding: 10px 0;
	}
`;
