import React, { Fragment } from "react";
import styled from "styled-components";

const LogoTextMedium = styled.h1`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.md};
  font-weight: 700;
  margin: 0px 60px 0px 0px;
`;

const LogoTextLarge = styled.h1`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.xl};
  font-weight: 700;
  margin: 0px 60px 0px 0px;
`;

interface IProps {
  size_xl: boolean;
}

export const Logo: React.FC<IProps> = ({ size_xl }: IProps) => {
  return (
    <Fragment>
      {size_xl ? (
        <LogoTextLarge data-cy="principal-title">Paisaflix</LogoTextLarge>
      ) : (
        <LogoTextMedium data-cy="principal-title">Paisaflix</LogoTextMedium>
      )}
    </Fragment>
  );
};
