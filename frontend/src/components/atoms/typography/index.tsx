import React from "react";
import { Body1, Body2, Heading1, Heading2, Heading3 } from "./style";

type Variants = "h1" | "h2" | "h3" | "body1" | "body2";

const VariantMapping = {
  h1: <Heading1 />,
  h2: <Heading2 />,
  h3: <Heading3 />,
  body1: <Body1 />,
  body2: <Body2 />,
};

export interface Props {
  id?: string;
  variant?: Variants;
  color?: string;
  size?: string;
  as?: string;
  children?: string | JSX.Element | JSX.Element[];
}

const Typography = ({
  id,
  variant = "body1",
  color,
  size,
  as,
  children,
}: Props) => {
  return React.cloneElement(VariantMapping[variant], {
    id,
    color,
    size,
    $as: as,
    children,
  });
};

export default Typography;
