import React from "react";
import { Container } from "./style";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Grid = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Grid;
