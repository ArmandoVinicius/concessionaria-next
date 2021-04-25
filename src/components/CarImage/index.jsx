import React from "react";
import { Container } from "./style";

const CarImage = ({ title, description }) => (
  <Container>
    <h2>{title}</h2>
    <p>{description}</p>
  </Container>
);

export default CarImage;
