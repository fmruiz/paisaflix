import React from "react";
import { timeFormat } from "../../utils/timeFormat";

import {
  MovieContainer,
  MovieDescriptionText,
  MovieDetails,
  MovieDetailsContainer,
  MovieTitleText,
} from "./styles";

import { WatchNowBtn } from "../UI/WatchNowBtn";

interface IProps {
  name?: string;
  genre?: string;
  duration?: number;
  rating?: number;
  views?: number;
}

export const MovieDescription: React.FC<IProps> = ({
  name,
  genre,
  duration,
  rating,
  views,
}: IProps) => (
  <MovieContainer>
    <MovieTitleText>{name}</MovieTitleText>
    <MovieDescriptionText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </MovieDescriptionText>
    <MovieDetailsContainer>
      <MovieDetails>Genre : {genre}</MovieDetails>
      <MovieDetails>Duration : {timeFormat(duration)}</MovieDetails>
      <MovieDetails>Ratings : {rating}</MovieDetails>
    </MovieDetailsContainer>
    <WatchNowBtn />
  </MovieContainer>
);
