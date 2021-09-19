import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import type { NextPage } from "next";
import Head from "next/head";

import { theme } from "styles/theme";

import { PrincipalContainer } from "@/components/UI/PrincipalContainer";
import { Banner } from "@/components/Banner/Banner";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PrincipalContainer>
        <Fragment>
          <Head>
            <title>Paisaflix</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Banner />
        </Fragment>
      </PrincipalContainer>
    </ThemeProvider>
  );
};

export default Home;
