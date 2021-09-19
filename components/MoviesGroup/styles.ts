import styled from "styled-components";

export const MoviesGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 104px;
  padding-right: 104px;
  margin-top: 150px;
`;

export const MoviesTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const MoviesTitle = styled.h4`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.md_3};
  margin: 0;
  font-weight: 500;
`;

export const MoviesSubtitle = styled.span`
  color: ${(p) => p.theme.color.yellow};
  font-size: ${(p) => p.theme.font_size.sm_2};
  margin: 0;
  font-weight: 700;
`;
