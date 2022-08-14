import styled from "styled-components";
const BioWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101vh;
`;
const BioDescription = styled.div`
  width: 48%;
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.highlightColor};
  padding: 50px;
  .desc {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.x20};
    line-height: 28px;
    margin-top: 0;
  }
`;
const BioImage = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.highlightColor};
  height: 100%;
  width: 48%;
  position: relative;

  .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
