import React from "react";
import styled from "styled-components";
import { SectionHeading } from "common/typography/style";
const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const Footer = () => {
  const date: string = JSON.stringify(new Date().getFullYear());
  return (
    <Wrapper>
      <SectionHeading>
        Copyright {date} © Praise ADEOTI. All Rights Reserved. Design Proudly
        inspired by © Daniel James
      </SectionHeading>
    </Wrapper>
  );
};

export default Footer;
