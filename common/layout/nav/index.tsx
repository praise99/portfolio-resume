import React from "react";
import { NavWrapper, Buttons, Name } from "./style";
import { HeadingTwoText } from "common/typography/style";
import { CustomButton } from "common/buttons";
const Nav = () => {
  return (
    <NavWrapper>
      <Name>
        <HeadingTwoText className="name">
          PRAISE ADEOTI <span className="span">| FRONTEND ENGINEER</span>
        </HeadingTwoText>
      </Name>
      <Buttons>
        <CustomButton secondary>PROJECTS</CustomButton>
        <CustomButton secondary>BIO</CustomButton>
        <CustomButton>HIRE PRAISE</CustomButton>
      </Buttons>
    </NavWrapper>
  );
};

export default Nav;
