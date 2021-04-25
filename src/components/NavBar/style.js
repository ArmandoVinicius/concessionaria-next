import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--grey);
  height: 100px;

  @media(max-width: 800px) {
    display: grid;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
`;

export const Section = styled.div`
  display: flex;

  margin: 30px;

  @media(max-width: 800px) {
    display: block;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;

  @media(max-width: 800px) {
    display: ${(props) => props.display};
    text-align: left;
    padding: 0;
  }
`;

export const Li = styled.li`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: var(--grey-white);
  padding: 10px;

  &:hover {
    border-bottom: 3px solid var(--black);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;

  @media(min-width: 800px) {
    display: none;
  }

  svg {
    font-size: 30px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;
