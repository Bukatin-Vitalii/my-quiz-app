import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
	align-items: center;
	border-right: 1px solid #ebebeb;
	display: flex;
	flex-direction: column;
	padding: 20px 16px;
	height: 100%;
	gap: 20px;

	@media (max-width: 768px) {
		padding: 10px 8px;
	}
`;

export const SidebarMenu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0;
	width: 100%;
	gap: 10px;
`;

export const SidebarMenuLink = styled(Link)`
	cursor: pointer;
	font-size: 18px;
	transition: all 0.3s ease;
	color: #1b1b1b;

	&:hover {
		color: #515151;
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const SidebarSearch = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
`;

export const SidebarSearchLabel = styled.p`
	font-size: 18px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const SidebarSearchInput = styled.input`
	border: 1px solid #ebebeb;
	border-radius: 5px;
	padding: 10px;
	width: 100%;
`;
