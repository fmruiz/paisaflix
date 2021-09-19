import React from "react";
import {
  MoviesGroupContainer,
  MoviesSubtitle,
  MoviesTitle,
  MoviesTitleContainer,
} from "./styles";

interface Props {}

export const MoviesGroup = (props: Props) => (
  <MoviesGroupContainer>
    <MoviesTitleContainer>
      <MoviesTitle>Featured</MoviesTitle>
      <MoviesSubtitle>View More</MoviesSubtitle>
    </MoviesTitleContainer>
  </MoviesGroupContainer>
);
