/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { numTrailers } from "../../utils/numTrailers";
import { PlayIcon } from "../UI/Icons/playIcon";

import {
  TrailerMovie,
  TrailerMovieContainer,
  TrailersContainer,
  TrailersTitle,
} from "./styles";

const queryClient = new QueryClient();

interface IProps {
  trailerImage?: string;
}

const Component = (props: any) => {
  const { isError, isLoading, data } = useQuery("Hero", () =>
    fetch(
      "https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers"
    ).then((res) => res.json())
  );

  if (isLoading)
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <h1>error</h1>
      </div>
    );

  return (
    <TrailersContainer>
      <TrailersTitle>Trailers</TrailersTitle>
      <TrailerMovieContainer>
        {!isError && props.trailerImage ? (
          <TrailerMovie>
            <img
              className={"img__trailer"}
              src={props.trailerImage}
              alt={`trailer_`}
            />
            <div className={"trailer__filter__movie"}>
              <PlayIcon />
            </div>
          </TrailerMovie>
        ) : null}
        {!isError && !props.trailerImage
          ? data.data.slice(0, -1).map((t: any, i: any) => (
              <TrailerMovie key={i}>
                <img
                  className={"img__trailer"}
                  src={t.trailerImage}
                  alt={`trailer_${i}`}
                />
                <div className={"trailer__filter"}></div>
                <p className={"img__index"}>{numTrailers(i + 1)}</p>
              </TrailerMovie>
            ))
          : null}
      </TrailerMovieContainer>
    </TrailersContainer>
  );
};

export const Trailers: React.FC<IProps> = (props: IProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...props} />
  </QueryClientProvider>
);
