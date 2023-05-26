import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";

const StyledButton = styled.button`
  padding: 8px 20px;
  margin-top: ${({ isMarginTop }) => isMarginTop ? "27px" : "0px"};
  height: 38px;
  background-color: ${Colors.primareyColor};
  color: #fff;
  border: none;
  border-radius: ${({ isRounded }) => isRounded ? "0 5px 5px 0" : "5px"};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  width: ${ props => props.width || '100%'};

  &:hover {
    background-color: rgba(${Colors.primareyColor}, 0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ text, ...props }) => {
  return (
    <StyledButton
      {...props} >        
      {text}
    </StyledButton>
  );
};

export default Button;