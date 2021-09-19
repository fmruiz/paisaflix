/* eslint-disable @next/next/no-img-element */
import React from "react";
import { timeFormat } from "utils/timeFormat";
import { viewsFormat } from "utils/viewsFormat";

import {
  Container,
  DetailsContainer,
  MovieContainerDetails,
  MovieContainerTag,
  MovieDetails,
  MovieName,
} from "./styles";

import { TimerIcon } from "@/components/UI/Icons/TimerIcon";
import { ViewIcon } from "@/components/UI/Icons/ViewIcon";

interface Props {
  image: string,
  name: string,
  genre: string,
  views: number,
  duration: number,
}

export const MovieContainer = (props: Props) => {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <MovieContainerDetails>
        <MovieContainerTag>{props.genre}</MovieContainerTag>
        <MovieDetails>
          <DetailsContainer>
            <div className={"details__movies"}>
              <TimerIcon />
              <p className={"details__text"}>{timeFormat(props.duration)}</p>
            </div>
            <div className={"details__movies"}>
              <ViewIcon />
              <p className={"details__text"}>{viewsFormat(props.views)}</p>
            </div>
          </DetailsContainer>
          <MovieName>{props.name}</MovieName>
        </MovieDetails>
      </MovieContainerDetails>
    </Container>
  );
};
