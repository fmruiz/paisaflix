import { NextPage } from "next";
import React, { Fragment } from "react";
import { MovieContainer } from "./styles";

const Movie: NextPage<any> = ({data}) => {
  return (
    <Fragment>
      <MovieContainer>{data.name}</MovieContainer>
    </Fragment>
  );
};

Movie.getInitialProps = (context) => {
  const { query } = context;
  const { id } = query;

  return fetch(
    `https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/${id}`
  ).then((apiResponse) => {
    if (apiResponse.ok) return apiResponse.json();
  });
};

export default Movie;
