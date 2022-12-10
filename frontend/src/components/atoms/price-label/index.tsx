import React from "react";
import { Container } from "./style";

interface Props {
  value: number;
}

const PriceLabel = ({ value }: Props) => {
  return (
    <Container>
      <sup>€</sup>
      {value.toFixed(2)}
    </Container>
  );
};

export default PriceLabel;
