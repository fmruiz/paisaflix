import React from "react";
import styled from "styled-components";

const WatchNowContainer = styled.button`
  background-color: ${(p) => p.theme.color.yellow};
  border: none;
  border-radius: 45px;
  color: ${(p) => p.theme.color.black};
  font-size: ${(p) => p.theme.font_size.sm_2};
  font-weight: 700;
  height: 76.44px;
  width: 348px;
  transition: all .3s;

  :hover {
    background-color: ${p => p.theme.color.yellow_strong};
    transition: all .3s;
  }
`;

export const WatchNowBtn: React.FC = () => (
  <WatchNowContainer>Watch now</WatchNowContainer>
);
