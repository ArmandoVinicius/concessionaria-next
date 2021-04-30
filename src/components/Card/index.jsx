import React from "react";
import { Container, Image } from "./style";
import { Title, Text } from "../style";

const Card = ({ src, alt, title, description }) => (
  <Container>
    <Image src={src} alt={alt} />
    <Title
      marginLeft="0"
      marginTop="1rem"
      marginBottom="1rem"
      fontSize="1rem"
      textColor="var(--text-primary)"
      style={{ textAlign: "center" }}
    >
      {title}
    </Title>
    <hr />
    <Text marginLeft="0" marginTop="1rem" textColor="var(--text-secundary)">
      {description}
    </Text>
  </Container>
);

export default Card;
