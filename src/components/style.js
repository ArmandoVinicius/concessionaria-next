import styled from "styled-components";

export const Container = styled.section`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    margin: 10px;
  }
`;

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
  text-align: ${(props) => props.textAlign};
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  text-align: center;
`;
