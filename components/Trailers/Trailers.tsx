/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import {
  TrailerMovie,
  TrailerMovieContainer,
  TrailersContainer,
  TrailersTitle,
} from "./styles";

const queryClient = new QueryClient();

const Component = () => {
  const { isError, isLoading, data } = useQuery("Hero", () =>
    fetch(
      "https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers"
    ).then((res) => res.json())
  );

  if (isLoading)
    return (
      <div>
        <h1>loading as</h1>
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
        {!isError && data.data.map((t: any, i: any) => (
          <TrailerMovie key={i}>
            <img className={"img__trailer"} src={t.trailerImage} alt={`trailer_${i}`} />
            <p className={"img__index"}>{i + 1}</p>
          </TrailerMovie>
        ))}
      </TrailerMovieContainer>
    </TrailersContainer>
  );
};

export const Trailers: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Component />
  </QueryClientProvider>
);
