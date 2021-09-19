import { NextPage } from "next";
import React, { Fragment } from "react";
import { MovieContainer } from "./styles";

const Movie: NextPage = () => {
  return (
    <Fragment>
      <MovieContainer>Hola mundo!</MovieContainer>
    </Fragment>
  );
};

export default Movie;
