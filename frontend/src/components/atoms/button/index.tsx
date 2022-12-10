import React from "react";
import { PrimaryButton, SecondaryButton, TextButton } from "./style";

type Variants = "primary" | "secondary" | "text";

const VariantMapping = {
  primary: <PrimaryButton />,
  secondary: <SecondaryButton />,
  text: <TextButton />,
};

export interface Props {
  variant?: Variants;
  children?: string | JSX.Element | JSX.Element[];
}

const Button = ({ variant = "primary", children }: Props) => {
  return React.cloneElement(VariantMapping[variant], {
    children,
  });
};

export default Button;
