import styled from "styled-components";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 40px;
`;

const Spin = styled.h6`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #00ffd0;
  animation: spin 1s linear infinite;
  -webkit-animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Spin />
    </SpinnerWrapper>
  );
};

const GeneralSpinner = styled(Spin)`
  height: 60px;
  width: 60px;
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-right-color: ${({ theme }) => theme.colors.primary};
`;

export { Spinner, GeneralSpinner };
