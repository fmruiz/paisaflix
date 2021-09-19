import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "@/components/Banner/Banner";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Paisaflix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Banner />
    </Fragment>
  );
};

export default Home;
