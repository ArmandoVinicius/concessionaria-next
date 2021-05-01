import React from "react";
import { Container, Description, Title } from "./style";

const CarImage = ({ title, description, image }) => (
  <Container image={image}>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default CarImage;
