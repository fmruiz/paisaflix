import React from "react";
import { timeFormat } from "../../utils/timeFormat";
import Link from "next/link";

import {
  MovieContainer,
  MovieDescriptionText,
  MovieDetails,
  MovieDetailsContainer,
  MovieTitleText,
  RatingContainer,
  StarContainer,
  WatchNowContainer,
} from "./styles";

import { StarIcon } from "../UI/Icons/StarIcon";

interface IProps {
  name?: string;
  genre?: string;
  duration?: number;
  rating: number;
  id?: string;
}

export const MovieDescription: React.FC<IProps> = ({
  name,
  genre,
  duration,
  rating,
  id,
}: IProps) => (
  <MovieContainer>
    <MovieTitleText>{name}</MovieTitleText>
    <RatingContainer>
      {[...Array(Math.ceil(rating))].map((star, i) => (
        <StarContainer key={i}>
          <StarIcon />
        </StarContainer>
      ))}
    </RatingContainer>
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
    <Link href={`/movie/[id]`} as={`/movie/${id}`} passHref>
      <WatchNowContainer>Watch now</WatchNowContainer>
    </Link>
  </MovieContainer>
);
