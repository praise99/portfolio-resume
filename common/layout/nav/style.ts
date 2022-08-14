import styled from "styled-components";
const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 24px;
  border: 2px solid ${({ theme }) => theme.colors.highlightColor};
`;
const Name = styled.div`
  width: 74%;
  .name {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: ${({ theme }) => theme.fontSize.x16};
    line-height: 24px;
    font-weight: 900;
    letter-spacing: 4px;
    text-transform: uppercase;
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
  button {
    padding: 8px 10px 8px 12px;
    font-size: ${({ theme }) => theme.fontSize.x12};
    line-height: 24px;
    font-weight: 600;
    border: none;
    border-left: 2px solid #00ffd0;
  }
`;

export { NavWrapper, Buttons, Name };
