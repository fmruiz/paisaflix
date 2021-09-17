import React from "react";

import { MovieContainer, MovieDescriptionText, MovieDetails, MovieDetailsContainer, MovieTitleText } from "./styles";

import { WatchNowBtn } from "../UI/WatchNowBtn";

export const MovieDescription: React.FC = () => (
  <MovieContainer>
    <MovieTitleText>Blade Runner</MovieTitleText>
    <MovieDescriptionText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </MovieDescriptionText>
    <MovieDetailsContainer>
        <MovieDetails>Genre : Action</MovieDetails>
        <MovieDetails>Genre : Action</MovieDetails>
        <MovieDetails>Genre : Action</MovieDetails>
    </MovieDetailsContainer>
    <WatchNowBtn />
  </MovieContainer>
);
