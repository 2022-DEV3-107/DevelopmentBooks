import React from "react";
import { CustomLink } from "./style";

export interface Props {
  to: string;
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
}

const Link = ({ to, children, ...rest }: Props) => {
  return (
    <CustomLink to={to} {...rest}>
      {children}
    </CustomLink>
  );
};

export default Link;
