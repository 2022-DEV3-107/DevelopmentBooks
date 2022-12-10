import tw from "tailwind-styled-components";
import { Props } from ".";

const Heading1 = tw.h1`
  ${({ color }: Props) => (color ? color : "text-gray-900")}
  ${({ size }: Props) =>
    size ? size : "text-5xl leading-[58px] tracking-tight"}
  mb-4
`;

const Heading2 = tw.h2`
  ${({ color }: Props) => (color ? color : "text-gray-900")}
  ${({ size }: Props) => (size ? size : "text-3xl")}
  leading-8
  mb-3
`;

const Heading3 = tw.h3`
  ${({ color }: Props) => (color ? color : "text-gray-900")}
  ${({ size }: Props) => (size ? size : "text-xl")}
  leading-8
  mb-2
`;

const Body1 = tw.p`
  ${({ color }: Props) => (color ? color : "text-gray-900")}
  ${({ size }: Props) => (size ? size : "text-base")}
  leading-6
  mb-2
`;

const Body2 = tw.p`
  ${({ color }: Props) => (color ? color : "text-gray-900")}
  ${({ size }: Props) => (size ? size : "text-[13px]")}
  leading-4
  mb-1
`;

export { Heading1, Heading2, Heading3, Body1, Body2 };
