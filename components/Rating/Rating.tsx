import React from "react";
import { StarIcon } from "../UI/Icons/StarIcon";

import { RatingContainer, StarContainer } from "./styles";

interface IProps {
  ratingNumber: number;
}

export const Rating: React.FC<IProps> = ({ ratingNumber }: IProps) => {
  return (
    <RatingContainer>
      {[...Array(Math.ceil(ratingNumber))].map((star, i) => (
        <StarContainer key={i}>
          <StarIcon />
        </StarContainer>
      ))}
    </RatingContainer>
  );
};
