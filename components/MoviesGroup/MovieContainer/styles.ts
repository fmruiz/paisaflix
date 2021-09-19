import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;
  margin-right: 16px;
  position: relative;
  cursor: pointer;
`;

export const MovieContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  padding: 26px;
  position: absolute;
  z-index: 2;
  top: 0%;
  width: 100%;
  height: 100%;
`;

export const MovieContainerTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(p) => p.theme.color.yellow};
  color: ${(p) => p.theme.color.black};
  font-size: ${(p) => p.theme.font_size.xs};
  border-radius: 16px;
  width: 77px;
  height: 27px;
  transition: all .3s;

  :hover {
    background-color: ${(p) => p.theme.color.yellow_strong};
    color: ${(p) => p.theme.color.black_strong};
    transition: all .3s;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieName = styled.p`
  font-weight: 700;
  font-size: ${(p) => p.theme.font_size.md_2};
  color: ${(p) => p.theme.color.white};
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

  .details__movies {
    display: flex;
    align-items: center;
  }

  .details__text {
    font-size: ${(p) => p.theme.font_size.xs};
    color: ${(p) => p.theme.color.gray_light};
    margin-left: 10px;
    margin-right: 20px;
  }
`;
