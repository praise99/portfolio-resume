import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
     margin:0;
     overflow-x:hidden ;
     scroll-behavior: smooth;
  
  }
  html{
  scroll-behavior: smooth;
}
`;
