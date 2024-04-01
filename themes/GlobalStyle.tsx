import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main-container{
    margin:0;
    overflow-x:hidden ;
    scroll-behavior: smooth;
    font-family:'Geist' ;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color:  ${({ theme }) => theme.colors.highlightColor};
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      padding:10px;
    }
  }
  html{
  scroll-behavior: smooth;
}

/* @font-face {
  font-family: "Lato";
  font-weight: 900;
  src: url("../assets/fonts/Lato/Lato-Black.ttf");
} */
/* @font-face {
  font-family: "Lato";
  font-weight: 700;
  src: url("..assets/fonts/Lato/Lato-Bold.ttf");
} */
@font-face {
  font-family: "Lato";
  src: url("..assets/fonts/Lato/Lato-Semibold.ttf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Lato";
  font-weight: 500;
  src: url("..assets/fonts/Lato/Lato-Medium.ttf");
}

/* @font-face {
  font-family: "Lato";
  font-weight: 400;
  src: url("..assets/fonts/Lato/Lato-Regular.ttf");
} */
/* 
@font-face {
  font-family: "Lato";
  font-weight: 300;
  src: url("..assets/fonts/Lato/Lato-Light.ttf");
} */
@font-face {
  font-family: "Lato";
  font-weight: 100;
  src: url("../assets/fonts/Lato/Lato-Thin.ttf");
}

/* GEIST */
@font-face {
  font-family: "Geist";
  font-weight: 900;
  src: url("../assets/fonts/Geist/Geist-UltraBlack.woff2");
}
@font-face {
  font-family: "Geist";
  font-weight: 800;
  src: url("../assets/fonts/Geist/Geist-Black.woff2");
}
@font-face {
  font-family: "Geist";
  src: url("../assets/fonts/Geist/Geist-Bold.woff2");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Geist";
  font-weight: 600;
  src: url("../assets/fonts/Geist/Geist-SemiBold.woff2");
}

@font-face {
  font-family: "Geist";
  font-weight: 500;
  src: url("../assets/fonts/Geist/Geist-Medium.woff2");
}

@font-face {
  font-family: "Geist";
  font-weight: 400;
  src: url("../assets/fonts/Geist/Geist-Regular.woff2");
}
@font-face {
  font-family: "Geist";
  font-weight: 300;
  src: url("../assets/fonts/Geist/Geist-Light.woff2");
}
@font-face {
  font-family: "Geist";
  font-weight: 200;
  src: url("../assets/fonts/Geist/Geist-UltraLight.woff2");
}

@font-face {
  font-family: "Geist";
  font-weight: 100;
  src: url("../assets/fonts/Geist/Geist-Thin.woff2");
}

/* INTER */

@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/Inter/Inter-Regular.woff2");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  font-weight: 500;
  src: url("../assets/fonts/Inter/Inter-Medium.woff2");
}

@font-face {
  font-family: "Inter";
  font-weight: 600;
  src: url("../assets/fonts/Inter/Inter-SemiBold.woff2");
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  src: url("../assets/fonts/Inter/Inter-Bold.woff2");
}
`;
