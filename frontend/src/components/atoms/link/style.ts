import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const CustomLink = tw(Link)`
  hover:text-gray-200
`;

export { CustomLink };
