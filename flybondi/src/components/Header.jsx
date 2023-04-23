import React from 'react'
import svgLogo from '../assets/logo.svg'
import imgArg from '../assets/country/arg.png'
import imgBr from '../assets/country/br.png'
import imgPar from '../assets/country/par.png'

export default function Header() {
  return (
   <>
   
   <header className="header">
        <img src={svgLogo} id="logoFlybondi" alt="logo flybondi, boton inicio"/>

        <nav id="nav-ctn">

            {/* <!-- ----------------------BTN MIRESERVA---------------------- --> */}
            <label className="label-theme-btn" htmlFor="theme">
                <input type="checkbox" id="theme" className="change-theme-btn"></input>
              </label>
                <button className="nav-btn dropdown-mireserva-btn" id="reserva"><span className="dropdown-nav-btn">Mi Reserva</span> <span className="dropdown-arrow">▼</span>
                    
                <div className="dropdown-reserva">
                 
                    <a className="dropdown-mireserva-anchor" href="#">Cambio de asiento/equipaje</a>
                    <a className="dropdown-mireserva-anchor" href="https://booking2.flybondi.com/es/manage/manage-booking?_gl=1*1k4953s*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjYzNDEuNTQuMC4w">Estado de mi reserva</a>
                    <a className="dropdown-mireserva-anchor" href="https://flybondi.com/flights/">Estado de vuelo</a>

                    <div>
                    <a className="dropdown-mireserva-anchor" href="https://booking2.flybondi.com/es/manage/manage-booking?_gl=1*kfwyo5*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjYzNDEuNTQuMC4w">Check in</a>
                </div>
                </div>
            </button>


            <a  href="https://flybondi.com/club" className="nav-btn">Club</a>            
            <a href="https://flybondi.com/flybondicargas" className="nav-btn">Cargas</a>

            <a href="https://www.blog.flybondi.com/?_gl=1*cndkkf*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjYzNDEuNTQuMC4w" className="nav-btn">Blog</a>

            <a href="https://ayuda.flybondi.com/?_gl=1*cndkkf*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjYzNDEuNTQuMC4w" className="nav-btn">¿Preguntas?</a>

          
           {/*  <!-- ----------------------BtnPais---------------------- --> */}
           
                <button className="nav-btn dropdown-mireserva-btn" id="country-dropdown-nav-btn">
                    <img id="logo-arg" src={imgArg} alt="logo argentina"/> 
                    <span className="dropdown-nav-btn"> Arg/$</span>
                    <span className="dropdown-arrow">▼</span>
                    
                <div className="dropdown-reserva" id="dropdown-country">
             
                    <a  href="" className="country-dropdown-anchor">
                        <img className="country-logo" id="logo-br" src={imgBr} alt="logo argentina" /> 
                        Br/$R
                    </a>
                   
                    <a href="" className="country-dropdown-anchor">
                        <img className="country-logo" id="logo-par" src={imgPar} alt="logo argentina" />  Par/U$D
                    </a>
                </div>
            </button>

        </nav>

        {/* <!-- DROPDOWN MOBILE --> */}
        <div className="dropdown">
            <input type="checkbox" id="dropdown-mobile" aria-label="boton hamburguesa mobile"/>
            <label htmlFor="dropdown-mobile" className="dropdown-closeBtn-backG"></label>
            <label htmlFor="dropdown-mobile" className="dropdown-closeBtn"></label>
            <button className="burgerIcon" aria-label="abrir barra de navegacion">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className="dropdown-menu">
               
                <a href="#" className="btn-menu-dropdown"> Mi reserva </a>
                <a href="#" className="btn-menu-dropdown">Estado de vuelo </a>
                <a href="#" className="btn-menu-dropdown">Grupos </a>
                <a href="#" className="btn-menu-dropdown">Ultra Pases </a>
                <a href="#" className="btn-menu-dropdown">Club </a>
                <a href="#" className="btn-menu-dropdown">Cargas</a>
                <a href="#" className="btn-menu-dropdown">Blog</a>
                <a href="#" className="btn-menu-dropdown">¿Preguntas?</a>
  
                <div className="selectLenguaje-ctn">
       
                    <button className="nav-btn dropdown-mireserva-btn">
                        <img id="logo-arg" src="/img/country/arg.png" alt="logo argentina"/> 
                        <span className="dropdown-nav-btn"> Arg/$</span>
                        <span className="dropdown-arrow">▼</span>
                        
                    <div className="dropdown-reserva" id="dropdown-country">
                 
                        <a  href="" className="country-dropdown-anchor">
                            <img className="country-logo" id="logo-br" src="/img/country/br.png" alt="logo argentina" /> 
                            Br/$R
                        </a>
                       
                        <a href="" className="country-dropdown-anchor">
                            <img className="country-logo" id="logo-par" src="/img/country/par.png" alt="logo argentina" />  Par/U$D
                        </a>
                    </div>
                </button>
                </div>
            </div>
        </div>
    </header>
   </>
  )
}
