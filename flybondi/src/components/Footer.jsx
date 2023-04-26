import React from 'react'

import svgTwitter from '../assets/socialMedia/twitter.svg'
import imgOnedev from '../assets/onedev.png'


export function LinkFooter(props){
return (
        <>
        <a href={props.href} className="footer-card-anchor">{props.text}</a>

        </>
)
}

function ColumTitleFooter(props){
return(
<>
                <h2 className="footer-card-title">
                    {props.title} 
                </h2>
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

            <div className="footer-cards">
                <ColumTitleFooter title='Nosotros'/>
                    <LinkFooter href='#' text='Sobre Flybondi'/>
                    <LinkFooter href='#' text='Prensa'/>
                    <LinkFooter href='#' text='Sumate al equipo'/>
                    <LinkFooter href='#' text='Información legal'/>
                    <LinkFooter href='#' text='¿Preguntas?'/>
                    <LinkFooter href='#' text='Blog'/>
           </div>

            <div className="footer-cards">
            <ColumTitleFooter title='Armá tu viaje'/>
                    <LinkFooter href='#' text='Buscar vuelos'/>
                    <LinkFooter href='#' text='Destinos'/>
                    <LinkFooter href='#' text='Revista SOMOS'/>
                    <LinkFooter href='#' text='Menú a bordo'/>
                    <LinkFooter href='#' text='Grupos'/>
            </div>


            <div className="footer-cards">
            <ColumTitleFooter title='Somos ultra low cost'/>
                <LinkFooter href='#' text='¿Qué es ser Ultra Low Cost?'/>
                <LinkFooter href='#' text='Aeropuertos'/>
            </div>



            <div id="footer-ctn-redes">
               {/*  <!-- FACEBOOK --> */}
                            <a id="facebook-link" aria-label="boton facebook" href="https://www.facebook.com/flybondi" className="footer-ctn-redes-anchor">
                            <svg fill='#fff' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path   d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg>
                                </a>

               {/*  <!-- TWITTER --> */}
                            <a aria-label="boton twitter" href="https://twitter.com/flybondioficial" className="footer-ctn-redes-anchor">
                            <img className='footer-logo' src={svgTwitter} alt="" />
                                </a>

               {/*  <!-- YOUTUBE --> */}
                            <a aria-label="boton youtube" href="https://www.youtube.com/flybondioficial" className="footer-ctn-redes-anchor"></a>
                
                {/* <!-- LINKEDIN --> */}
                            <a aria-label="boton linkedin" href="https://www.linkedin.com/notifications/?filter=all" className="footer-ctn-redes-anchor"></a>
                
                                {/*  <!-- INSTAGRAM --> */}
                            <a aria-label="boton instagram" href="https://www.instagram.com/flybondioficial/" className="footer-ctn-redes-anchor">
                                
                            </a>
                    </div>
         </div>

  


    
        <div className="footer-lineaDivisoria"></div>
        <div id="rightsFlybondi">
           <a aria-label="link github" href="https://github.com/CiclistaSinLicencia?tab=repositories" target="_blank"> <img src={imgOnedev} alt=""/></a>

         
        </div>


    </footer>

   
   </>
  )
}
