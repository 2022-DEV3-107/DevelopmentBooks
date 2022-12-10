import React from "react";
import Button from "../../components/atoms/button";
import { Container } from "./style";

export interface Props {}

const Home = (props: Props) => {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <div>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="text">Text Button</Button>
      </div>
    </Container>
  );
};

export default Home;
