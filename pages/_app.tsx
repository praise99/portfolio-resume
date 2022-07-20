import { useEffect } from "react";
import "styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themes } from "themes/theme";
import { GlobalStyle } from "themes/GlobalStyle";
import "themes/normalize.css";
import "themes/style.css";
// import Layout from "component/common/layout/Index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default MyApp;
