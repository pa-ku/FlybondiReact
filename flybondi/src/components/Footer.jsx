import React from 'react'
import svgFb from '../assets/socialMedia/twitter-logo.svg'

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
                <h2 className="footer-card-title">
                    Nosotros
                </h2>

                <a href="" className="footer-card-anchor">Sobre Flybondi</a>
                <a href="" className="footer-card-anchor">Prensa</a>
                <a href="" className="footer-card-anchor">Sumate al equipo</a>
                <a href="" className="footer-card-anchor">Información legal</a>
                <a href="" className="footer-card-anchor">¿Preguntas?</a>
                <a href="" className="footer-card-anchor">Blog</a>
            </div>


            <div className="footer-cards">
                <h2 className="footer-card-title">
                    Armá tu viaje
                </h2>
                <a href="" className="footer-card-anchor">Buscar vuelos</a>
                <a href="" className="footer-card-anchor">Destinos</a>
                <a href="" className="footer-card-anchor">Revista SOMOS</a>
                <a href="" className="footer-card-anchor">Menú a bordo</a>
                <a href="" className="footer-card-anchor">Grupos</a>
            </div>
            <div className="footer-cards">
                <h2 className="footer-card-title">
                    Somos ultra low cost
                </h2>
                <a href="" className="footer-card-anchor">¿Qué es ser Ultra Low Cost?</a>
                <a href="" className="footer-card-anchor">Aeropuertos</a>
            </div>
            <div id="footer-ctn-redes">
               {/*  <!-- FACEBOOK --> */}
                            <a id="facebook-link" aria-label="boton facebook" href="https://www.facebook.com/flybondi" className="footer-ctn-redes-anchor">
                            <img src={svgFb} alt="" />
                                </a>

               {/*  <!-- TWITTER --> */}
                            <a aria-label="boton twitter" href="https://twitter.com/flybondioficial" className="footer-ctn-redes-anchor">
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
           <a aria-label="link github" href="https://github.com/CiclistaSinLicencia?tab=repositories" target="_blank"> <img src="/img/OneDev Logov2.png" alt=""/></a>

         
        </div>


    </footer>

   
   </>
  )
}
