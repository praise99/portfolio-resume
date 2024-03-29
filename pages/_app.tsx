import { useEffect } from "react";
import "styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themes } from "themes/theme";
import { GlobalStyle } from "themes/GlobalStyle";
import "../themes/style.css";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const GA_TRACKING_ID = `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
