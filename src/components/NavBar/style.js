import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--grey);
  height: 75px;

  @media(max-width: 800px) {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    padding: 20px;
  }
`;

export const Section = styled.div`
  @media(max-width: 800px) {
    display: flex;
    width: 100%;
    background: var(--grey); 
    position: absolute;
    top: 78px;
    left: 0;
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
`;

export const Button = styled.button`
  cursor: pointer;
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
