import React from "react";
import Button from "../../components/atoms/button";
import Header from "../../components/molecules/header";
import { Container } from "./style";
import Card from "../../components/molecules/card";
import { useHomeLogic } from "./logic";
import { NavLinks } from "./constants";
import Grid from "../../components/atoms/grid";

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
                buttons={[<Button key={1}>Add to Cart</Button>]}
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
