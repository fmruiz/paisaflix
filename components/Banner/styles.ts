import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: absolute;
  z-index: 0;
  margin: 0 auto;
  width: 100%;
  .cover__container {
    width: 854px;
    position: relative;
  }
  .filter {
    z-index: 2;
    background: linear-gradient(90deg, #000000 6%, rgba(24, 24, 24, 0) 70%);
    width: 100%;
    height: 100%;
    position: absolute;
    filter: opacity(100%);
  }
  .cover__image {
    width: 100%;
    filter: saturate(120%);
    z-index: 1;
  }
`;
