import React from "react";
import Button from "../../components/atoms/button";
import Header from "../../components/molecules/header";
import { Container } from "./style";
import Card from "../../components/molecules/card";
import { useHomeLogic } from "./logic";
import { NavLinks } from "./constants";

export interface Props {}

const Home = (props: Props) => {
  const { reducer } = useHomeLogic();

  return (
    <>
      <Header links={NavLinks} />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 py-6">
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
        </div>
      </Container>
    </>
  );
};

export default Home;
