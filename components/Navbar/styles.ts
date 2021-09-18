import styled from "styled-components";

export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const Column = styled.div`
  align-items: center;
  display: flex;
`;

export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
`;

export const LinksName = styled.span`
  color: ${(p) => p.theme.color.gray_semi_light};
  font-size: ${(p) => p.theme.font_size.sm};
  margin-right: 24px;
  margin-left: 24px;
  transition: all .2s;

  :hover {
    color: ${p => p.theme.color.white};
    border-bottom: 4px solid ${p => p.theme.color.yellow};
    padding-bottom: 8px;
    cursor: pointer;
    transition: all .2s;
  }
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
