import React from "react";

import {
  Column,
  ContactContainer,
  FooterContainer,
  FooterInput,
  FooterInputBtn,
  FooterInputContainer,
  FooterLinks,
  FooterMenu,
  FooterMenuLinks,
  FooterTitle,
  NewsLettersContainer,
  NewsLettersText,
} from "./styles";

import { ContactDetails } from "../UI/ContactDetails";
import { ArrowIcon } from "../UI/Icons/ArrowIcon";
import { LocationIcon } from "../UI/Icons/LocationIcon";
import { MessageIcon } from "../UI/Icons/MessageIcon";
import { PhoneIcon } from "../UI/Icons/PhoneIcon";
import { Logo } from "../UI/Logo";

const CONTACT_DETAILS = [
  { Component: LocationIcon, text: "8819 Enrique Martinez, Bs As., 90280" },
  { Component: MessageIcon, text: "hola@paisanos.io" },
  { Component: PhoneIcon, text: "+271 386-647-3637" },
];

const PRODUCT_LINKS = [
  {
    title: "Product",
    link_one: "Movies",
    link_two: "TV Show",
    link_three: "Videos",
  },
];

const MEDIA_LINKS = [
  {
    title: "Media Group",
    link_one: "Nice Studio",
    link_two: "Nice News",
    link_three: "Nice TV",
  },
];

const SITEMAP_LINKS = [
  {
    title: "Sitemap",
    link_one: "About",
    link_two: "Careers",
    link_three: "Press",
  },
];

export const Footer: React.FC = () => (
  <FooterContainer data-cy="footer">
    <Column data-cy="footer-first-column">
      <Logo size_xl={true} data-cy="footer-title"/>
      <NewsLettersContainer>
        <NewsLettersText>Join Newsletters</NewsLettersText>
        <FooterInputContainer>
          <FooterInput placeholder="Insert your mail here" data-cy="footer-input"/>
          <FooterInputBtn>
            <ArrowIcon />
          </FooterInputBtn>
        </FooterInputContainer>
      </NewsLettersContainer>
    </Column>
    <Column data-cy="footer-second-column">
      <FooterMenu>
        {PRODUCT_LINKS.map((p, i) => (
          <FooterMenuLinks key={i} data-cy="footer-product-list">
            <FooterTitle>{p.title}</FooterTitle>
            <FooterLinks href={"/"}>{p.link_one}</FooterLinks>
            <FooterLinks href={"/"}>{p.link_two}</FooterLinks>
            <FooterLinks href={"/"}>{p.link_three}</FooterLinks>
          </FooterMenuLinks>
        ))}
        {MEDIA_LINKS.map((p, i) => (
          <FooterMenuLinks key={i} data-cy="footer-media-list">
            <FooterTitle>{p.title}</FooterTitle>
            <FooterLinks href={"/"}>{p.link_one}</FooterLinks>
            <FooterLinks href={"/"}>{p.link_two}</FooterLinks>
            <FooterLinks href={"/"}>{p.link_three}</FooterLinks>
          </FooterMenuLinks>
        ))}
        {SITEMAP_LINKS.map((p, i) => (
          <FooterMenuLinks key={i} data-cy="footer-sitemap-list">
            <FooterTitle>{p.title}</FooterTitle>
            <FooterLinks href={"/"}>{p.link_one}</FooterLinks>
            <FooterLinks href={"/"}>{p.link_two}</FooterLinks>
            <FooterLinks href={"/"}>{p.link_three}</FooterLinks>
          </FooterMenuLinks>
        ))}
      </FooterMenu>
      <ContactContainer>
        {CONTACT_DETAILS.map(({ Component, text }, i) => (
          <ContactDetails icon={<Component />} text={text} key={i} />
        ))}
      </ContactContainer>
    </Column>
  </FooterContainer>
);
