import { useState } from "react";

import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { Container, Section, Ul, Li, Button, Image } from "./style";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Section>
        <Image src="assets/logomarca.png" alt="Logo" />
      </Section>
      <Section>
        <Button onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </Button>
        <Ul display={open ? "grid" : "none"}>
          <Link href="/">
            <Li>Home</Li>
          </Link>
          <Link href="/about_us">
            <Li>Sobre</Li>
          </Link>
          <Li>Marcas</Li>
          <Li>Login</Li>
        </Ul>
      </Section>
    </Container>
  );
};

export default NavBar;
