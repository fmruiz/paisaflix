import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsLettersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsLettersText = styled.span`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.sm};
  font-weight: 700;
`;

export const FooterInputContainer = styled.div`
  border: 1px solid ${(p) => p.theme.color.gray_strong};
  border-radius: 8px;
  height: 64px;
  margin-top: 30px;
  width: 282px;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  width: 85%;
`;

export const FooterMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.span`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.sm};
  font-weight: 700;
  margin-bottom: 20px;
`;

export const FooterLinks = styled.span`
  color: ${(p) => p.theme.color.gray_semi_light};
  font-size: ${(p) => p.theme.font_size.sm};
  margin-top: 21px;
  margin-bottom: 21px;
`;
