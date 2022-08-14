import React, { ReactNode } from "react";
import { Wrapper, FirstCard, SecondCard, ThirdCard } from "./style";
import { HeadingThreeText } from "common/typography/style";
interface ContainerProps {
  children: ReactNode;
  title: string;
}
const Container = ({ children, title, ...rest }: ContainerProps) => {
  return (
    <Wrapper>
      <FirstCard>
        <SecondCard>
          <HeadingThreeText className="heading">{title}</HeadingThreeText>
          <ThirdCard></ThirdCard>
          {children}
        </SecondCard>
      </FirstCard>
    </Wrapper>
  );
};

export default Container;
