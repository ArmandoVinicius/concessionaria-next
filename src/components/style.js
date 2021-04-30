import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  color: ${(props) => props.textColor || "var(--text-primary)"};

  margin-top: ${(props) => props.marginTop || "2.5rem"};
  margin-bottom: ${(props) => props.marginBottom || "2.5rem"};
  margin-left: ${(props) => props.marginLeft || "4rem"};
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "1.125rem"};
  color: ${(props) => props.textColor || "var(--text-primary)"};

  margin-top: ${(props) => props.marginTop || "1rem"};
  margin-bottom: ${(props) => props.marginBottom || "1.5rem"};
  margin-left: ${(props) => props.marginLeft || "4rem"};
`;

export const ContainerCards = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
