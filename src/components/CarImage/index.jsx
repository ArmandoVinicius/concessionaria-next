import React from "react";
import { Container, Description, Title } from "./style";

const CarImage = ({ title, description }) => (
  <Container image="assets/carro.jpg">
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

export default CarImage;
