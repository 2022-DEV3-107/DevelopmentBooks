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
  onClick?: Function;
  children?: string | JSX.Element | JSX.Element[];
}

const Button = ({
  variant = "primary",
  onClick = () => {},
  children,
}: Props) => {
  return React.cloneElement(VariantMapping[variant], {
    onClick,
    children,
  });
};

export default Button;
