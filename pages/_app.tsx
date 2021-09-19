import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "../styles/globals.css";
import { theme } from "styles/theme";

import { PrincipalContainer } from "@/components/UI/PrincipalContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PrincipalContainer>
        <Component {...pageProps} />
      </PrincipalContainer>
    </ThemeProvider>
  );
}
export default MyApp;
