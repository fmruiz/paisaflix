/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import { BannerContainer, CoverContainer } from "./styles";

import { Navbar } from "../Navbar/Navbar";
import { MovieDescription } from "../MovieDescription/MovieDescription";
import { Footer } from "../Footer/Footer";
import { Trailers } from "../Trailers/Trailers";

const queryClient = new QueryClient();

const Component = () => {
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
    <BannerContainer>
      <Navbar />
      <CoverContainer>
        <div className={"cover__container"}>
          <div className={"filter"}></div>
          <img
            className={"cover__image"}
            src={data.data.coverImage}
            alt={`${data.data.name} image`}
          />
        </div>
      </CoverContainer>
      <MovieDescription
        name={data.data.name}
        genre={data.data.genre}
        duration={data.data.duration}
        rating={data.data.rating}
      />
      <Trailers />
      <Footer />
    </BannerContainer>
  );
};

export const Banner: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
};
