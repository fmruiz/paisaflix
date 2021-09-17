import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

import { Navbar } from "@/components/Navbar/Navbar";
import { PrincipalContainer } from "@/components/UI/PrincipalContainer";
import { Footer } from "@/components/Footer/Footer";

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
          <Navbar />
          <Footer />
        </Fragment>
      </PrincipalContainer>
    </ThemeProvider>
  );
};

export default Home;
