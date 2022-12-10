import React from "react";
import Link, { Props as LinkProps } from "../../atoms/link";
import { Nav, Section, Container, Logo, Ul, UserNav } from "./style";
import HeartsIcon from "../../../assets/images/heart.svg";
import ShoppingCartIcon from "../../../assets/images/shopping-cart.svg";
import UserIcon from "../../../assets/images/user.svg";
import HamburgerMenuIcon from "../../../assets/images/hamburger-menu.svg";

interface Props {
  links?: LinkProps[];
}

const Header = ({ links = [] }: Props) => {
  return (
    <Section>
      <Nav>
        <Container>
          <Logo to="/">DevBooks.</Logo>

          <Ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.to}>{link.children}</Link>
                </li>
              );
            })}
          </Ul>

          <UserNav>
            <Link to="/">
              <img src={HeartsIcon} className="h-6 w-6" alt="Favorites" />
            </Link>
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={ShoppingCartIcon}
                  className="h-6 w-6"
                  alt="Shopping Cart"
                />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </div>
            </Link>

            <Link to="/">
              <img src={UserIcon} className="h-6 w-6" alt="User Profile" />
            </Link>
          </UserNav>
        </Container>

        <Link to="/" className="xl:hidden flex items-center mr-6">
          <img src={ShoppingCartIcon} className="h-6 w-6" alt="Shopping Cart" />

          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </Link>
        <Link to="/" className="xl:hidden self-center mr-6">
          <img src={HamburgerMenuIcon} className="h-6 w-6" alt="Mobile Menu" />
        </Link>
      </Nav>
    </Section>
  );
};

export default Header;
