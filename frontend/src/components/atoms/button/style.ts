import tw from "tailwind-styled-components";
import { Props } from "./index";

const DefaultButton = tw.button<Props>`
  rounded-md
  py-2
  px-5
  transition
`;

const PrimaryButton = tw(DefaultButton)`
  border
  text-white
  border-purple-600
  bg-purple-600
  hover:bg-purple-500
  hover:border-purple-500
`;

const SecondaryButton = tw(DefaultButton)`
  border
  text-purple-600
  border-purple-600
  hover:bg-purple-500
  hover:border-purple-500
  hover:text-white
`;

const TextButton = tw(DefaultButton)`
  border
  border-transparent
  text-purple-600
  hover:bg-purple-50
`;

export { PrimaryButton, SecondaryButton, TextButton };
