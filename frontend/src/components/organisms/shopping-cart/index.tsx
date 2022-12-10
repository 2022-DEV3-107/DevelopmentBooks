import React from "react";
import PriceLabel from "../../atoms/price-label";
import Typography from "../../atoms/typography";
import { useShoppingCartLogic } from "./logic";
import { Container } from "./style";

type Props = {};

const ShoppingCart = (props: Props) => {
  const { reducer } = useShoppingCartLogic();
  return (
    <Container>
      {reducer.shoppingCart.items.length !== 0 ? (
        <>
          {reducer.shoppingCart.items.map((basketItem, index) => {
            return (
              <div className="flex p-4 border-b border-gray-200 last:border-0">
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
              </div>
            );
          })}

          <div className="flex flex-col items-end p-4">
            <div className="flex items-center">
              <div>Subtotal</div>
              <div className="w-32 text-right">
                <PriceLabel value={reducer.shoppingCart.subTotal} />
              </div>
            </div>
            <div className="flex items-center">
              <div>Discount</div>
              <div className="w-32 text-right">
                <PriceLabel value={reducer.shoppingCart.discount} />
              </div>
            </div>
            <div className="flex items-center">
              <div>Total</div>
              <div className="w-32 text-right">
                <PriceLabel value={reducer.shoppingCart.total} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-8 text-center">Your basket is empty!</div>
      )}
    </Container>
  );
};

export default ShoppingCart;
