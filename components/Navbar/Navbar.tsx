import React from "react";
import Image from "next/image";

import {
  Column,
  LinksContainer,
  LinksName,
  NavbarContainer,
  UserContainer,
  UserName,
} from "./styles";

import { Logo } from "../UI/Logo";
import { SearchIcon } from "../UI/Icons/SearchIcon";

const LINKS_NAV = [
  { name: "Home", data: "navbar-home" },
  { name: "Contact Us", data: "navbar-contact" },
  { name: "FAQ", data: "navbar-faq" },
  { name: "Pricing", data: "navbar-pricing" },
];

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-cy="navbar">
      <Column data-cy="navbar-first-column">
        <Logo />
        <LinksContainer data-cy="navbar-container-links">
          {LINKS_NAV.map((link, i) => (
            <LinksName key={i} data-cy={link.data}>{link.name}</LinksName>
          ))}
        </LinksContainer>
      </Column>
      <Column data-cy="navbar-second-column">
        <SearchIcon />
        <UserContainer>
          <Image src="/images/user.png" alt="user" width="48" height="48" />
          <UserName>Soy Paisanx</UserName>
        </UserContainer>
      </Column>
    </NavbarContainer>
  );
};
