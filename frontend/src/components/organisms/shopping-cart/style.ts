import tw from "tailwind-styled-components";

const Container = tw.div`
  w-full
  rounded-lg
  shadow-md
  border
  border-gray-200
  bg-white
`;

const BasketItem = tw.div`
  flex 
  p-4
  border-b
  border-gray-200
`;

const Summary = tw.div`
  flex
  flex-col
  items-end
  p-4
`;

const SummaryRow = tw.div`
  flex
  items-center
`;

const PriceContainer = tw.div`
  w-32
  text-right
`;

const EmptyBasket = tw.div`
  p-8
  text-center
`;

export {
  Container,
  BasketItem,
  Summary,
  SummaryRow,
  PriceContainer,
  EmptyBasket,
};
