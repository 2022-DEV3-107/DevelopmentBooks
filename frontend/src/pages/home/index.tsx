import React from "react";
import { Container } from "./style";

export interface Props {}

const Home = (props: Props) => {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Container>
  );
};

export default Home;
