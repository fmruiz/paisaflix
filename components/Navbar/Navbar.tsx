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
  { name: "Home" },
  { name: "Contact Us" },
  { name: "FAQ" },
  { name: "Pricing" },
];

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Column>
        <Logo />
        <LinksContainer>
          {LINKS_NAV.map((link, i) => (
            <LinksName key={i}>{link.name}</LinksName>
          ))}
        </LinksContainer>
      </Column>
      <Column>
        <SearchIcon />
        <UserContainer>
          <Image src="/images/user.png" alt="user" width="48" height="48" />
          <UserName>Soy Paisanx</UserName>
        </UserContainer>
      </Column>
    </NavbarContainer>
  );
};
