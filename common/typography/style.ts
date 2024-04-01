import styled, { css } from "styled-components";

const fontStyle = css`
  font-family: ${({ theme }) => theme.fontFamily.Geist};
  font-style: normal;
  color: ${({ theme }) => theme.colors.highlightColor};
`;
const HeadingOneText = styled.h1`
  ${fontStyle}
  max-width: 800px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 64px;
  line-height: 75px;
  font-weight: 700;
  letter-spacing: -0.05em;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    font-size: ${({ theme }) => theme.fontSize.x32};
    line-height: 32px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    font-size: ${({ theme }) => theme.fontSize.x24};
  }
  .reveal-text {
    font-weight: 700;
    font-size: 64px;
    line-height: 75px;
    color: #d1d1d6;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x32};
      line-height: 32px;
      text-align: center;
    }
    @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
      font-size: ${({ theme }) => theme.fontSize.x24};
    }
  }
`;

const HeadingTwoText = styled.h2`
  ${fontStyle}
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.x32};
  font-weight: 700;
  line-height: 32px;
  font-weight: 700;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    font-size: ${({ theme }) => theme.fontSize.x24};
    line-height: 32px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    font-size: ${({ theme }) => theme.fontSize.x20};
    line-height: 24px;
  }
`;

const HeadingThreeText = styled.h3`
  ${fontStyle}
  font-size: ${({ theme }) => theme.fontSize.x24};
  font-weight: 700;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 36px;
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    font-size: ${({ theme }) => theme.fontSize.x20};
  }
`;

const HeadingFourText = styled.h4`
  ${fontStyle}
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.x18};
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 24px;
`;

const HeadingFiveText = styled.h5`
  ${fontStyle}
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.x14};
`;
const HeadingSixthText = styled.h6`
  ${fontStyle}
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.x12};
`;

const SectionHeading = styled.p`
  ${fontStyle}
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.x12};
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    font-size: ${({ theme }) => theme.fontSize.x16};
    line-height: 20px;
  }
  .reveal-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #d1d1d6;
    @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
      font-size: ${({ theme }) => theme.fontSize.x14};
      line-height: 20px;
    }
  }
`;

export {
  HeadingOneText,
  HeadingTwoText,
  HeadingThreeText,
  HeadingFourText,
  HeadingFiveText,
  HeadingSixthText,
  SectionHeading,
};
