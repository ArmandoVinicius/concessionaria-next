import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.image || "assets/carro_branco.jpg"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 4.375rem;
`;

export const Title = styled.h2`
  font-size: 26px;
`;

export const Description = styled.p`
  font-size: 18px;
`;
