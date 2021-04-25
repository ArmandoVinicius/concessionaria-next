import styled from "styled-components";

const Home = () => (
  <Container>
    <Text>Hello World!</Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.h1`
  font-size: 55px;
`;

export default Home;
