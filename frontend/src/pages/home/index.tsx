import React from "react";
import Button from "../../components/atoms/button";
import Header from "../../components/molecules/header";
import { Container } from "./style";
import Card from "../../components/molecules/card";
import { useHomeLogic } from "./logic";
import { NavLinks } from "./constants";
import Grid from "../../components/atoms/grid";
import PriceLabel from "../../components/atoms/price-label";

export interface Props {}

const Home = (props: Props) => {
  const { reducer } = useHomeLogic();

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
                  <Button key={1}>Add to Cart</Button>,
                  <PriceLabel value={book.price} key={2} />,
                ]}
                key={index}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
