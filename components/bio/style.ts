import styled from "styled-components";
const BioWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    flex-direction: column;
    height: auto;
  }
`;
const BioDescription = styled.div`
  width: 48%;
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.highlightColor};
  padding: 55px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
    border-right: none;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 15px;
    margin-bottom: 30px;
  }
  .desc {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.x18};
    line-height: 28px;
    margin-top: 0;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x16};
      line-height: 24px;
    }
  }
`;
const BioImage = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.highlightColor};
  height: 100%;
  width: 48%;
  position: relative;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
    border-top: 2px solid ${({ theme }) => theme.colors.highlightColor};
    border-left: none;
  }

  .image {
    width: 100%;
    height: 100%;
  }
  .layer {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;
export { BioWrapper, BioDescription, BioImage };
