import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const Section = tw.section`
  relative 
  mx-auto
`;

const Nav = tw.nav`
  flex
  justify-between
  bg-gray-900
  text-white
  w-screen
`;

const Container = tw.div`
  flex
  w-full
  px-5
  py-6
  items-center

  xl:px-8
`;

const Logo = tw(Link)`
  text-3xl
  font-bold
  font-heading
`;

const Ul = tw.ul`
  hidden
  px-4
  mx-auto
  font-semibold
  font-heading
  space-x-12

  md:flex
`;

const UserNav = tw.div`
  hidden
  items-center
  space-x-5

  xl:flex
`;

export { Section, Nav, Container, Logo, Ul, UserNav };
