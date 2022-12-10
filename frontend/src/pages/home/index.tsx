import React from "react";
import Button from "../../components/atoms/button";
import Typography from "../../components/atoms/typography";
import Header from "../../components/molecules/header";
import { Props as LinkProps } from "../../components/atoms/link";
import { Container } from "./style";
import Card from "../../components/molecules/card";

export interface Props {}

const NavLinks: LinkProps[] = [
  {
    to: "/",
    children: "Home",
  },
  {
    to: "/",
    children: "Categories",
  },
  {
    to: "/",
    children: "Contact Us",
  },
];

const Home = (props: Props) => {
  return (
    <>
      <Header links={NavLinks} />

      <Container>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="mt-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="text">Text Button</Button>
        </div>
        <div className="mt-4">
          <Typography variant="h1">Header 1</Typography>
          <Typography variant="h2">Header 2</Typography>
          <Typography variant="h3">Header 3</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet aliquet odio vitae cursus. Duis rutrum non sapien
            elementum pharetra. Duis ligula nibh, tempor tincidunt massa quis,
            dignissim molestie mi. Maecenas euismod ipsum in tellus pharetra
            tristique. Suspendisse enim justo, suscipit eget blandit quis,
            rutrum quis augue. Integer a vulputate libero, mollis rutrum lectus.
            Aenean eros enim, pretium vel facilisis ullamcorper, cursus id enim.
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet aliquet odio vitae cursus. Duis rutrum non sapien
            elementum pharetra. Duis ligula nibh, tempor tincidunt massa quis,
            dignissim molestie mi. Maecenas euismod ipsum in tellus pharetra
            tristique. Suspendisse enim justo, suscipit eget blandit quis,
            rutrum quis augue. Integer a vulputate libero, mollis rutrum lectus.
            Aenean eros enim, pretium vel facilisis ullamcorper, cursus id enim.
          </Typography>
        </div>
        <div className="mt-4">
          <Card
            title="Clean Code"
            body="Robert Martin - 2008"
            imageURL="https://raw.githubusercontent.com/stephane-genicot/katas/master/images/Kata_DevelopmentBooks_CleanCode.png"
            buttons={[<Button key={1}>Add to Cart</Button>]}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
