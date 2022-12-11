import React from "react";
import Button from "../../components/atoms/button";
import Header from "../../components/molecules/header";
import { Container } from "./style";
import Card from "../../components/molecules/card";
import { useHomeLogic } from "./logic";
import { NavLinks } from "./constants";
import Grid from "../../components/atoms/grid";
import PriceLabel from "../../components/atoms/price-label";
import ShoppingCart from "../../components/organisms/shopping-cart";

export interface Props {}

const Home = (props: Props) => {
  const { reducer, actions } = useHomeLogic();

  return (
    <>
      <Header links={NavLinks} />

      <Container>
        <Grid>
          {reducer.books.map((book, index) => {
            return (
              <Card
                title={book.title}
                body={`${book.author} - ${book.publishedAt}`}
                imageURL={book.imageUrl}
                actions={[
                  <Button
                    onClick={() => {
                      actions.addToBasket(reducer.shoppingCart, book);
                    }}
                    key={1}
                  >
                    Add to Cart
                  </Button>,
                  <PriceLabel value={book.price} key={2} />,
                ]}
                key={index}
              />
            );
          })}
        </Grid>
        <ShoppingCart />
      </Container>
    </>
  );
};

export default Home;
