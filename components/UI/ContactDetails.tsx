import React from "react";
import styled from "styled-components";

const ContactDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  :nth-child(2) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const ContactIcon = styled.div`
  color: ${(p) => p.theme.color.white};
`;

const ContactText = styled.span`
  color: ${(p) => p.theme.color.white};
  font-size: ${(p) => p.theme.font_size.xs};
  margin-left: 12px;
`;

interface IProps {
  icon: any;
  text: string;
}

export const ContactDetails: React.FC<IProps> = (props: IProps) => {
  return (
    <ContactDetailsContainer>
      <ContactIcon>{props.icon}</ContactIcon>
      <ContactText>{props.text}</ContactText>
    </ContactDetailsContainer>
  );
};
