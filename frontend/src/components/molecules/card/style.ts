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
  h-auto 
  
  lg:h-24
`;

const CardActions = tw.div`
  flex
  justify-between
  mt-6
  p-5
`;

const ImageContainer = tw.div`
  rounded-t-lg
  h-72
  overflow-hidden
  relative
  
  after:bottom-0
  after:h-24
  after:absolute
  after:w-full
  after:bg-gradient-to-t
  after:from-gray-900
  after:to-transparent
`;

export { Container, CardBody, CardActions, ImageContainer };
