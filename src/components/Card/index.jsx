import React from "react";
import { Container, SingleCard } from "./style";
import { Title, Text } from "../style";

const Card = ({ src, alt, title, description }) => (
  <Container>
    <SingleCard>
      <img src={src} alt={alt} width="100%" />
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
    </SingleCard>
  </Container>
);

export default Card;
