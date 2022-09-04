import React, { ReactNode } from "react";
import { Wrapper, FirstCard, SecondCard, ThirdCard } from "./style";
import { HeadingThreeText } from "common/typography/style";
interface ContainerProps {
  children: ReactNode;
  title: string;
  id?: string;
}
const Container = ({ children, id, title, ...rest }: ContainerProps) => {
  return (
    <Wrapper id={id}>
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
