import tw from "tailwind-styled-components";

const Container = tw.div`
  bg-white
  shadow-md
  border
  border-gray-200
  rounded-lg
  max-w-sm
`;

const CardBody = tw.div`
  p-5
`;

const CardActions = tw.div`
  mt-6
`;

export { Container, CardBody, CardActions };
