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
