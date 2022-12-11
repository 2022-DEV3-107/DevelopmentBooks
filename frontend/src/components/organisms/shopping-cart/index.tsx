import React from "react";
import PriceLabel from "../../atoms/price-label";
import Typography from "../../atoms/typography";
import { useShoppingCartLogic } from "./logic";
import {
  BasketItem,
  Container,
  EmptyBasket,
  PriceContainer,
  Summary,
  SummaryRow,
} from "./style";

type Props = {};

const ShoppingCart = (props: Props) => {
  const { reducer } = useShoppingCartLogic();
  return (
    <Container>
      {reducer.shoppingCart.items.length !== 0 ? (
        <>
          {reducer.shoppingCart.items.map((basketItem, index) => {
            return (
              <BasketItem key={index}>
                <div className="mr-4">
                  <img
                    src={basketItem.item.imageUrl}
                    alt={basketItem.item.title}
                    width="80"
                  />
                </div>
                <div className="flex-grow">
                  <Typography variant="h3">{basketItem.item.title}</Typography>
                  <Typography variant="body2">
                    {`${basketItem.item.author} - ${basketItem.item.publishedAt}`}
                  </Typography>
                  <Typography variant="body1">
                    {`Qty: ${basketItem.quantity}`}
                  </Typography>
                </div>
                <div>
                  <PriceLabel
                    value={basketItem.item.price * basketItem.quantity}
                  />
                </div>
              </BasketItem>
            );
          })}

          <Summary>
            <SummaryRow>
              <div>Subtotal</div>
              <PriceContainer>
                <PriceLabel value={reducer.shoppingCart.subTotal} />
              </PriceContainer>
            </SummaryRow>
            <SummaryRow>
              <div>Discount</div>
              <PriceContainer>
                <PriceLabel value={reducer.shoppingCart.discount} />
              </PriceContainer>
            </SummaryRow>
            <SummaryRow>
              <div>Total</div>
              <PriceContainer>
                <PriceLabel value={reducer.shoppingCart.total} />
              </PriceContainer>
            </SummaryRow>
          </Summary>
        </>
      ) : (
        <EmptyBasket>Your basket is empty!</EmptyBasket>
      )}
    </Container>
  );
};

export default ShoppingCart;
