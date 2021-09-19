import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import {
  MoviesGroupContainer,
  MoviesSelectedContainer,
  MoviesSelectedRow,
  MoviesSubtitle,
  MoviesTitle,
  MoviesTitleContainer,
} from "./styles";

import { MovieContainer } from "./MovieContainer/MovieContainer";

const queryClient = new QueryClient();

const Component = () => {
  const { isError, isLoading, data } = useQuery("Hero", () =>
    fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies").then(
      (res) => res.json()
    )
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
    <MoviesGroupContainer>
      <MoviesTitleContainer>
        <MoviesTitle>Featured</MoviesTitle>
        <MoviesSubtitle>View More</MoviesSubtitle>
      </MoviesTitleContainer>
      <MoviesSelectedContainer>
        <MoviesSelectedRow>
          {!isError &&
            data.data
              .slice(0, -3)
              .map((d: any, i: any) => (
                <MovieContainer
                  key={i}
                  id={d._id}
                  image={d.coverImage}
                  name={d.name}
                  genre={d.genre}
                  views={d.views}
                  duration={d.duration}
                />
              ))}
        </MoviesSelectedRow>
        <MoviesSelectedRow>
          {!isError &&
            data.data
              .slice(2)
              .map((d: any, i: any) => (
                <MovieContainer
                  key={i}
                  id={d._id}
                  image={d.coverImage}
                  name={d.name}
                  genre={d.genre}
                  views={d.views}
                  duration={d.duration}
                />
              ))}
        </MoviesSelectedRow>
      </MoviesSelectedContainer>
    </MoviesGroupContainer>
  );
};

export const MoviesGroup: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Component />
  </QueryClientProvider>
);
