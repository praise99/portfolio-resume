import styled from "styled-components";
const Wrapper = styled.div`
  .navbar {
    position: relative;
    z-index: 999;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  .sticky-nav {
    position: fixed;
    top: 0;
    width: 96%;
    /* left: 0; */
  }
  .hidden {
    visibility: hidden;
  }
  .notHidden {
    visibility: visible;
  }
`;
const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 24px;
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 8px 15px 8px 15px;
  }
`;
const Name = styled.div`
  width: 40%;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    width: 100%;
  }
  .name {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: ${({ theme }) => theme.fontSize.x16};
    line-height: 24px;
    font-weight: 900;
    letter-spacing: 4px;
    text-transform: uppercase;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x12};
      text-align: center;
      letter-spacing: 2px;
    }
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
  .span {
    margin-left: 2px;
    font-weight: 300;
  }
`;
const Buttons = styled.div`
  width: 26%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    display: none;
  }
  button {
    padding: 8px 10px 8px 12px;
    font-size: ${({ theme }) => theme.fontSize.x12};
    line-height: 24px;
    font-weight: 600;
    border: none;
    border-left: 2px solid #00ffd0;
  }
`;
const ImageContainer = styled.div`
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    display: none;
  }
  .image {
    border-radius: 50%;
    overflow: hidden;
    margin-left: 20px;
    border: 3px solid ${({ theme }) => theme.colors.highlightColor};
    position: relative;
    margin-right: 20px;
  }
  .layer {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 32px;
    border-radius: 50%;
    opacity: 0.5;
    margin-right: 18px;
  }
`;

export { ImageContainer, Wrapper, NavWrapper, Buttons, Name };
