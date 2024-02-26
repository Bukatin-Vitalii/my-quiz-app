import React from 'react';
import styled, { css } from 'styled-components';

export const CustomizedButton = styled(({ sidebarHidden, ...rest }) => <button {...rest} />)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #ebebeb;
    transition: all 0.3s ease-in-out;
    ${(props) => (props.sidebarHidden ? css`
      transform: rotate(180deg);
      border-right: none;
      border-radius: 5px 0 0 5px;
    ` : css`
      transform: rotate(0);
      border-left: none;
      border-radius: 0 5px 5px 0;
    `)}
  }
`;

export const CustomizedWrapper = styled.div`
	padding: 20px;
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

	@media (max-width: 768px) {
		height: calc(100vh - 120px);
	}
`;
