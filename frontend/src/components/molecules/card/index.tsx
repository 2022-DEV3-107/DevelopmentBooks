import React from "react";
import Link from "../../atoms/link";
import Typography from "../../atoms/typography";
import { CardActions, CardBody, Container } from "./style";

interface Props {
  title: string;
  body: string;
  link?: string;
  imageURL?: string;
  buttons?: JSX.Element | JSX.Element[];
}

const Card = ({ title, body, link = "/", imageURL, buttons }: Props) => {
  return (
    <Container>
      {imageURL !== undefined && (
        <Link to={link}>
          <img className="rounded-t-lg" src={imageURL} alt={title} />
        </Link>
      )}

      <CardBody>
        <Link to={link}>
          <Typography variant="h3">{title}</Typography>
        </Link>
        <Typography variant="body1">{body}</Typography>
        {buttons !== undefined && <CardActions>{buttons}</CardActions>}
      </CardBody>
    </Container>
  );
};

export default Card;
