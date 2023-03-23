import styled from "styled-components";
const HeroWrapper = styled.div``;
const FirstCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
  border-top: none;
  height: 87.5vh;
  padding: 0px 25px 0px 25px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    height: auto;
  }
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
`;
const ThirdCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    flex-direction: column;
  }
  .hero_title {
    width: 72%;
    border-right: 2px solid ${({ theme }) => theme.colors.highlightColor};
    height: 100%;
    padding: 24px;
    display: flex;
    align-items: flex-end;
    @media (max-width: ${({ theme }) => theme.responsive.lg}) {
      width: 100%;
      justify-content: center;
      border-right: none;
      margin-bottom: 10px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      padding: 44px 15px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
      padding: 44px 10px;
    }
  }
  .hero_description {
    width: 23.7%;
    border-left: 2px solid ${({ theme }) => theme.colors.highlightColor};
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 30px;

    @media (max-width: ${({ theme }) => theme.responsive.lg}) {
      width: 100%;
      align-items: center;
      justify-content: center;
      border-left: none;
      height: 80%;
      border-top: 2px solid ${({ theme }) => theme.colors.highlightColor};
    }
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      padding: 25px 15px;
      flex-direction: column;
    }

    .button-hidden {
      display: none;
      @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        margin-top: 20px;
        display: block;
      }
    }
    .image-hidden {
      display: none;
      @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        display: block;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 30px;
        border: 3px solid ${({ theme }) => theme.colors.highlightColor};
        position: relative;
      }
    }
    .image {
      border-radius: 50%;
      overflow: hidden;
      margin-left: 30px;
      border: 3px solid ${({ theme }) => theme.colors.highlightColor};
      position: relative;
      @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        display: none;
      }
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
