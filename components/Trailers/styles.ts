import styled from "styled-components";

export const TrailersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  padding-right: 104px;
  z-index: 2;
`;

export const TrailersTitle = styled.p`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.md};
  font-weight: 700;
  margin: 0;
  padding-top: 26.5px;
  padding-bottom: 32px;
`;

export const TrailerMovieContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TrailerMovie = styled.div`
  height: 160px;
  position: relative;
  .img__trailer {
    margin-right: 15px;
  }
  .img__index {
    color: ${(p) => p.theme.color.white};
    font-size: ${(p) => p.theme.font_size.md};
    font-weight: 700;
    margin: 0;
    z-index: 3;
    position: absolute;
    text-align: end;
    width: 92%;
    bottom: 2%;
  }
`;
