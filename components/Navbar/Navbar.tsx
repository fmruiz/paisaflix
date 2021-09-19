import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  { name: "Home", data: "navbar-home", path: "/" },
  { name: "Contact Us", data: "navbar-contact", path: "#" },
  { name: "FAQ", data: "navbar-faq", path: "#" },
  { name: "Pricing", data: "navbar-pricing", path: "#" },
];

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-cy="navbar">
      <Column data-cy="navbar-first-column">
        <Logo />
        <LinksContainer data-cy="navbar-container-links">
          {LINKS_NAV.map((link, i) => (
            <Link href={link.path} passHref key={i}>
              <LinksName data-cy={link.data}>{link.name}</LinksName>
            </Link>
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
