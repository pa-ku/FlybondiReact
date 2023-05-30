import React from 'react'

import imgOnedev from '../assets/icons/onedev.png'

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styled from '@emotion/styled';


const BtnRedes = styled.a`
color: white;
scale: 1.5;
transition: 0.2s;
&:hover{
color: var(--orange-flybondi);
}
@media(max-width: 600px){
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
}`


const CtnRedes = styled.div`
  display: flex;
  gap: 20px;

  flex-direction: column;
  margin-left: auto;
@media(max-width: 600px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
}
`

const CtnSection = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 6px;
@media(max-width: 600px){
    text-align: center;
align-items: center;
justify-content: center;
}`


const BtnSection = styled.a`
color: #b3b3b3;
text-decoration: none;
transition: 0.2s;
font-weight: 300;
font-size: 16px;

&:hover{
    color: var(--lightOrange-flybondi);
}`

const SectionTitle = styled.h2`
 font-weight: 400;
  margin: 0px;
  padding-bottom: 10px;
  font-size: 20px;`


const LineaDivisoria = styled.div`
  background-color: rgb(137, 137, 137);
  height: 0.5px;
  margin-top: 10px;
`
const RightsLogo = styled.img`
  height: 25px;
`
const CtnRights = styled.div`
  text-align: center;
  height: 0px;
  display: flex;

  justify-content: center;
  padding-top: 10px;
`


export function LinkFooter(props){
return (
        <>
        <BtnSection href={props.href}>{props.text}</BtnSection>
        </>
)
}

function ColumTitleFooter(props){
return(
<>
                <SectionTitle>
                    {props.title} 
                </SectionTitle>
</>
)
}

export default function Footer() {
  return (
   <>
   
   <footer id="footer">
        <div id="footer-ctn">
            <div id="footer-somos-ctn">
                <h2 id="footer-somos-title">
                    Somos Flybondi
                </h2>
                <p id="footer-somos-txt">
                    Somos los que no dejan que las distancias nos separen de los que más queremos. Somos los que hoy
                    estamos acá y mañana podemos estar allá. Somos la libertad de volar!
                </p>
                <a href="" id="footer-somos-btn">Conocenos!</a>
            </div>

            <CtnSection>
                    <ColumTitleFooter title='Nosotros'/>
                        <LinkFooter href='#' text='Sobre Flybondi'/>
                        <LinkFooter href='#' text='Prensa'/>
                        <LinkFooter href='#' text='Sumate al equipo'/>
                        <LinkFooter href='#' text='Información legal'/>
                        <LinkFooter href='#' text='¿Preguntas?'/>
                        <LinkFooter href='#' text='Blog'/>
           </CtnSection>

            <CtnSection >
                <ColumTitleFooter title='Armá tu viaje'/>
                        <LinkFooter href='#' text='Buscar vuelos'/>
                        <LinkFooter href='#' text='Destinos'/>
                        <LinkFooter href='#' text='Revista SOMOS'/>
                        <LinkFooter href='#' text='Menú a bordo'/>
                        <LinkFooter href='#' text='Grupos'/>
            </CtnSection>


            <CtnSection >
                <ColumTitleFooter title='Somos ultra low cost'/>
                    <LinkFooter href='#' text='¿Qué es ser Ultra Low Cost?'/>
                    <LinkFooter href='#' text='Aeropuertos'/>
            </CtnSection>



            <CtnRedes>
                            <BtnRedes aria-label="boton facebook" href="https://www.facebook.com/flybondi" className="footer-ctn-redes-anchor">
                           <FacebookIcon></FacebookIcon>
                                </BtnRedes>

                            <BtnRedes aria-label="boton twitter" href="https://twitter.com/flybondioficial" >
                            <TwitterIcon></TwitterIcon>
                                </BtnRedes>

                            <BtnRedes aria-label="boton youtube" href="https://www.youtube.com/flybondioficial">
                            <YouTubeIcon></YouTubeIcon>   
                            </BtnRedes>
                
                            <BtnRedes aria-label="boton linkedin" href="https://www.linkedin.com/notifications/?filter=all">
                            <LinkedInIcon></LinkedInIcon>
                            </BtnRedes>
                
                            <BtnRedes aria-label="boton instagram" href="https://www.instagram.com/flybondioficial/">
                            <InstagramIcon></InstagramIcon>
                            </BtnRedes>
                    </CtnRedes>
                 </div>

  
    
        <LineaDivisoria></LineaDivisoria>

        <CtnRights id="rightsFlybondi">
           <a aria-label="link github" href="https://github.com/CiclistaSinLicencia?tab=repositories" target="_blank"> <RightsLogo src={imgOnedev} alt=""/></a>
        </CtnRights>


    </footer>

   
   </>
  )
}
