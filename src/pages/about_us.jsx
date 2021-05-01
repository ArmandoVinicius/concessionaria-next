import Link from "next/link";
import { useState } from "react";

import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaSnapchatGhost,
} from "react-icons/fa";

import CarImage from "../components/CarImage";

import { Image, Title } from "../components/style";

function AboutUs() {
  const [isMouseOver, setIsMouseOver] = useState();

  function handleMouseOver() {
    setIsMouseOver(!isMouseOver);
  }

  const style = {
    cursor: "pointer",
    justifySelf: "center",
    transform: isMouseOver ? "scale(1.15)" : "scale(1)",
    transition: "all .2s",
  };

  return (
    <div>
      <CarImage
        title="Compre os melhores carros aqui"
        description="Novos e seminovos"
        image="assets/carro.jpg"
      />
      <Title
        fontSize="1.750rem"
        marginBottom="0"
        marginLeft="6rem"
        textColor="var(--text-darker)"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </Title>
      <div className="fullWidthContainer">
        <section className="leftContainer">
          <fieldset>
            <legend>
              <h2>Contate-nos</h2>
            </legend>
            <tr>
              <td className="left">
                <h3>
                  Telefone comercial:
                  <br />
                  (XX) XXXX-XXXX
                </h3>
              </td>
              <td className="right">
                <h3>
                  24 horas por dia,
                  <br />
                  todos os dias
                </h3>
              </td>
            </tr>
            <tr>
              <td className="left text">
                <h3 className="numberPhone">Celular: (88) 99954-1750</h3>
              </td>
              <td className="right">
                <Image
                  src="https://randinho.vanni.app/wp-content/uploads/2021/03/logomarca60px.png"
                  height="64px"
                  alt="Foto logo concessionária"
                />
                <p>Concessionária Hope</p>
              </td>
            </tr>
          </fieldset>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <h2>Onde nos encontrar:</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            <Link href="https://api.whatsapp.com/send?phone=5588999541750&text=Oi,%20eu%20vim%20pelo%20site%20da%20Concession%C3%A1ria%20Hope">
              <FaWhatsapp
                size="2.5rem"
                style={style}
                onMouseOver={handleMouseOver}
              />
            </Link>
            <Link href="https://instagram.com/vini.armand0">
              <FaInstagram
                size="2.5rem"
                style={style}
                onMouseOver={handleMouseOver}
              />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter
                size="2.5rem"
                style={style}
                onMouseOver={handleMouseOver}
              />
            </Link>
            <Link href="https://facebook.com">
              <FaFacebookF
                size="2.5rem"
                style={style}
                onMouseOver={handleMouseOver}
              />
            </Link>
            <Link href="https://telegram.org">
              <FaTelegramPlane
                size="2.5rem"
                style={style}
                onMouseOver={handleMouseOver}
              />
            </Link>
            <Link href="https://snapchat.com">
              <FaSnapchatGhost
                size="2.5rem"
                style={style}
                onMouseOver={handleMouseOver}
              />
            </Link>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .fullWidthContainer {
            margin-left: 6rem;
            margin-top: 3rem;
            display: flex;
            flex-direction: row;
          }

          .leftContainer {
            width: 50%;
          }

          .numberPhone {
            text-align: center;
            padding: 0;
          }

          p {
            text-align: center;
          }

          .right {
            padding-left: 8rem;
          }

          .left {
            padding-left: 2rem;
          }

          h2 {
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
}

export default AboutUs;
