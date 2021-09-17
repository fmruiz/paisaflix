import styled from "styled-components";

export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  align-items: center;
  display: flex;
`;

export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const LinksName = styled.span`
  color: ${(p) => p.theme.color.gray_semi_light};
  font-size: ${(p) => p.theme.font_size.sm};
  margin-right: 24px;
  margin-left: 24px;
`;

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
  padding-left: 40px;
`;

export const UserName = styled.span`
  color: ${(p) => p.theme.color.gray_semi_light};
  font-size: ${(p) => p.theme.font_size.sm};
  font-weight: 700;
  margin-left: 15px;
`;
