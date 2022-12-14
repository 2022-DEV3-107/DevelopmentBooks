import tw from "tailwind-styled-components";

const Container = tw.div`
  grid
  grid-cols-1
  gap-6
  py-6
  
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  2xl:grid-cols-5 
`;

export { Container };
