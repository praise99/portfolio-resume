import styled from "styled-components";
const HeroWrapper = styled.div``;
const FirstCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
  border-top: none;
  height: 87.5vh;
  padding: 0px 25px 0px 25px;
`;
const SecondCard = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
  height: 100%;
  border-top: none;
  border-bottom: none;
`;
const ThirdCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hero_title {
    width: 72%;
    border-right: 2px solid ${({ theme }) => theme.colors.highlightColor};
    height: 100%;
    padding: 24px;
    display: flex;
    align-items: flex-end;
  }
  .hero_description {
    width: 23.7%;
    border-left: 2px solid ${({ theme }) => theme.colors.highlightColor};
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 30px;

    .image {
      border-radius: 50%;
      overflow: hidden;
      margin-left: 30px;
      border: 3px solid ${({ theme }) => theme.colors.highlightColor};
      position: relative;
    }
    .layer {
      background-color: ${({ theme }) => theme.colors.backgroundColor};
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      height: 100%;
      border-radius: 50%;
      opacity: 0.5;
    }
    .linking {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
  }
`;
export { HeroWrapper, FirstCard, SecondCard, ThirdCard };
