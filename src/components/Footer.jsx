import React from "react";

import imgOnedev from "../assets/icons/onedev.png";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "@emotion/styled";

const BtnRedes = styled.a`
  color: white;
  scale: 1.5;
  transition: 0.2s;

  &:hover {
    color: var(--orange-flybondi);
  }
`;

const CtnRedes = styled.div`
  display: flex;
  row-gap: 1.2em;
  column-gap: 2em;
  flex-direction: column;
  margin-left: auto;
  text-align: center;

  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

const CtnSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 10px;

  @media (max-width: 600px) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const BtnSection = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  transition: 0.2s;
  font-weight: 300;
  font-size: 16px;
  &:hover {
    color: var(--lightOrange-flybondi);
  }
`;

const LineaDivisoria = styled.div`
  background-color: rgb(137, 137, 137);
  height: 0.5px;
  margin-top: 10px;
`;

const CtnRights = styled.div`
  text-align: center;
  height: 0px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

const RightsLogo = styled.img`
  height: 25px;
`;

const Contenedor = styled.div`
  padding: 2em 2em 1em 2em;
  display: flex;
  color: white;
  flex-wrap: wrap;
  column-gap: 70px;
  row-gap: 40px;
  column-gap: 6em;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
  padding-bottom: 2em;
  background-color: var(--footer-backG);
`;

const CtnSomos = styled.div`
  max-width: 500px;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

const SectionTitle = styled.h2`
  font-weight: 400;
  padding-bottom: 10px;
  font-size: ${(props) => props.font};
  text-align: ${(props) => props.align};
  width: ${(props) => props.width};
`;

const BtnConocenos = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  outline: 2px solid #b3b3b3;
  padding: 0.5em 1em;
  border-radius: 20px;
  width: 100%;
  transition: 0.2s;
  text-align: center;
  &:hover {
    color: var(--lightOrange-flybondi);
    outline: 2px solid var(--lightOrange-flybondi);
  }
`;

export function LinkFooter({ href, text }) {
  return (
    <>
      <BtnSection href={href}>{text}</BtnSection>
    </>
  );
}

function ColumTitleFooter({ title }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <Wrapper id="footer">
        <Contenedor>
          <CtnSomos>
            <SectionTitle font="25px" align="left" width="100%">
              Somos Flybondi
            </SectionTitle>
            <p id="footer-somos-txt">
              Somos los que no dejan que las distancias nos separen de los que
              más queremos. Somos los que hoy estamos acá y mañana podemos estar
              allá. Somos la libertad de volar!
            </p>
            <BtnConocenos href="">Conocenos!</BtnConocenos>
          </CtnSomos>

          <CtnSection>
            <ColumTitleFooter title="Nosotros" />
            <LinkFooter href="#" text="Sobre Flybondi" />
            <LinkFooter href="#" text="Prensa" />
            <LinkFooter href="#" text="Sumate al equipo" />
            <LinkFooter href="#" text="Información legal" />
            <LinkFooter href="#" text="¿Preguntas?" />
            <LinkFooter href="#" text="Blog" />
          </CtnSection>

          <CtnSection>
            <ColumTitleFooter title="Armá tu viaje" />
            <LinkFooter href="#" text="Buscar vuelos" />
            <LinkFooter href="#" text="Destinos" />
            <LinkFooter href="#" text="Revista SOMOS" />
            <LinkFooter href="#" text="Menú a bordo" />
            <LinkFooter href="#" text="Grupos" />
          </CtnSection>

          <CtnSection>
            <ColumTitleFooter title="Somos ultra low cost" />
            <LinkFooter href="#" text="¿Qué es ser Ultra Low Cost?" />
            <LinkFooter href="#" text="Aeropuertos" />
          </CtnSection>

          <CtnRedes>
            <BtnRedes
              aria-label="boton facebook"
              href="https://www.facebook.com/flybondi"
              className="footer-ctn-redes-anchor"
            >
              <FacebookIcon></FacebookIcon>
            </BtnRedes>

            <BtnRedes
              aria-label="boton twitter"
              href="https://twitter.com/flybondioficial"
            >
              <TwitterIcon></TwitterIcon>
            </BtnRedes>

            <BtnRedes
              aria-label="boton youtube"
              href="https://www.youtube.com/flybondioficial"
            >
              <YouTubeIcon></YouTubeIcon>
            </BtnRedes>

            <BtnRedes
              aria-label="boton linkedin"
              href="https://www.linkedin.com/notifications/?filter=all"
            >
              <LinkedInIcon></LinkedInIcon>
            </BtnRedes>

            <BtnRedes
              aria-label="boton instagram"
              href="https://www.instagram.com/flybondioficial/"
            >
              <InstagramIcon></InstagramIcon>
            </BtnRedes>
          </CtnRedes>
        </Contenedor>

        <LineaDivisoria></LineaDivisoria>

        <CtnRights id="rightsFlybondi">
          <RightsLogo src={imgOnedev} alt="" />
        </CtnRights>
      </Wrapper>
    </>
  );
}
