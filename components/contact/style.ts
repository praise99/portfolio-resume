import styled from "styled-components";
const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101vh;
  .disabled {
    cursor: not-allowed;
  }
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    flex-direction: column;
    height: auto;
  }
`;
const ContactEmpty = styled.div`
  width: 7%;
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.highlightColor};
`;
const ContactForms = styled.form`
  width: 57%;
  height: 100%;
  border-left: 2px solid ${({ theme }) => theme.colors.highlightColor};
  border-right: 2px solid ${({ theme }) => theme.colors.highlightColor};
  padding: 30px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
    border-left: none;
    border-right: none;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 20px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    padding: 10px;
  }
  .title {
    margin-top: 0px;
    margin-bottom: 24px;
  }
`;
const ContactInformation = styled.div`
  width: 27%;
  height: 100%;
  border-left: 2px solid ${({ theme }) => theme.colors.highlightColor};
  padding: 30px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
    border-left: none;
  }
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    padding: 10px;
  }
  .image {
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid ${({ theme }) => theme.colors.highlightColor};
  }
  .layer {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    opacity: 0.5;
  }
  .linking {
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .name {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.x20};
    line-height: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
      font-size: ${({ theme }) => theme.fontSize.x16};
    }
    a {
      text-decoration: underline;
    }
    span {
      /* margin-bottom: 100px; */
    }
  }
`;
const FormGroup = styled.div`
  label {
    font-size: ${({ theme }) => theme.fontSize.x12};
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  input,
  textarea {
    height: 60px;
    margin-top: 10px;
    margin-bottom: 25px;
    border-style: none none solid;
    border-width: 1.5px;
    border-color: #000 #000 ${({ theme }) => theme.colors.highlightColor};
    background-color: hsla(0, 0%, 100%, 0.1);
    color: ${({ theme }) => theme.colors.highlightColor};
    font-size: 16px;
    line-height: 32px;
    display: block;
    width: 100%;
    padding: 8px 12px;
    outline: none;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.colors.highlightColor};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.colors.highlightColor};
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${({ theme }) => theme.colors.highlightColor};
    }
  }
  textarea {
    resize: none;
    height: 150px;
  }
`;
export {
  ContactWrapper,
  ContactEmpty,
  ContactForms,
  ContactInformation,
  FormGroup,
};
