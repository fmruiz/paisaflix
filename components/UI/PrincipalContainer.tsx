import React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
}

const MediaContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 1440px) {
    max-width: ${(p) => p.theme.max_width.desktop};
  }
`;

export const PrincipalContainer: React.FC<IProps> = (props: IProps) => (
  <MediaContainer>{props.children}</MediaContainer>
);
