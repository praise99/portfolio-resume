import React from "react";
import styled from "styled-components";
interface buttonProps {
  children: React.ReactNode;
  secondary?: any;
}
const CustomButton = styled.button<{
  secondary?: any;
}>`
  background-color: ${(props) => (props.secondary ? "#005963" : "#00ffd0")};
  -webkit-transition: color 200ms ease, background-color 200ms ease;
  transition: color 200ms ease, background-color 200ms ease;
  color: #005963;
  color: ${(props) => (props.secondary ? "#00ffd0" : "#005963")};
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 12px 20px;
  border: 2px solid #00ffd0;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.secondary ? "#00ffd0" : "#005963")};
    color: ${(props) => (props.secondary ? "#005963" : "#00ffd0")};
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 2px 10px;
    font-size: 12px;
  }
`;
const Button = ({ children }: buttonProps) => {
  return <Button secondary>{children}</Button>;
};

export { CustomButton };
