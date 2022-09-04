import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 50px;
`;
const FirstCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
  height: auto;
  padding: 0px 25px 0px 25px;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 0px 15px 0px 15px;
  }
`;
const SecondCard = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
  height: 100%;
  border-top: none;
  border-bottom: none;

  .heading {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 24px;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      text-align: center;
      margin-left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
    }
  }
`;
const ThirdCard = styled.div`
  /* margin-top: 20px; */
  height: 2px;
  /* padding-top: 40px; */
  border-bottom: 2px solid ${({ theme }) => theme.colors.highlightColor};
  margin-left: -27px;
  margin-right: -27px;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    margin-left: -17px;
    margin-right: -17px;
  }
`;
export { Wrapper, FirstCard, SecondCard, ThirdCard };
