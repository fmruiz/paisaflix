import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import { BannerContainer } from "./styles";

import { Navbar } from "../Navbar/Navbar";
import { MovieDescription } from "../MovieDescription/MovieDescription";

interface Props {}

const queryClient = new QueryClient();

const Example = () => {
  const { isError, isLoading, data } = useQuery("Hero", () =>
    fetch("https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero").then(
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
    <div>
      <Navbar />
      <MovieDescription
        name={data.data.name}
        genre={data.data.genre}
        duration={data.data.duration}
        rating={data.data.rating}
        views={data.data.views}
      />
    </div>
  );
};

export const Banner: React.FC = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BannerContainer>
        <Example />
      </BannerContainer>
    </QueryClientProvider>
  );
};
