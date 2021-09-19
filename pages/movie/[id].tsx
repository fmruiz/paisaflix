/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { NextPage } from "next";

import { Footer } from "@/components/Footer/Footer";
import { BannerContainer, CoverContainer } from "@/components/Banner/styles";
import { Navbar } from "@/components/Navbar/Navbar";
import { MovieDescription } from "@/components/MovieDescription/MovieDescription";
import { Trailers } from "@/components/Trailers/Trailers";

const Movie: NextPage<any> = ({ data }) => {
  return (
    <Fragment>
      <BannerContainer>
        <Navbar />
        <CoverContainer>
          <div className={"cover__container"}>
            <div className={"filter"}></div>
            <img
              className={"cover__image"}
              src={data.coverImage}
              alt={`${data.name} image`}
            />
          </div>
        </CoverContainer>
        <MovieDescription
          name={data.name}
          genre={data.genre}
          duration={data.duration}
          rating={data.rating}
          id={data._id}
        />
        <Trailers trailerImage={data.trailerImage}/>
        <Footer />
      </BannerContainer>
    </Fragment>
  );
};

Movie.getInitialProps = (context) => {
  const { query } = context;
  const { id } = query;

  return fetch(
    `https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/${id}`
  ).then((apiResponse) => {
    if (apiResponse.ok) return apiResponse.json();
  });
};

export default Movie;
