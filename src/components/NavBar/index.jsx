import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "hamburger-react";
import {
  Container, Section, Ul, Li, Button, Image,
} from "./style";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Image src="assets/logomarca.png" alt="Logo" />
      <Button>
        <Hamburger toggled={open} toggle={setOpen} />
      </Button>
      <Section>
        <Ul display={open ? "grid" : "none"}>
          <Li>Home</Li>
          <Li>Sobre</Li>
          <Li>Marcas</Li>
          <Li>Login</Li>
        </Ul>
      </Section>
    </Container>
  );
};

export default NavBar;
