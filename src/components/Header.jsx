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

            {/* <label className="label-theme-btn" htmlFor="theme">
                <input type="checkbox" id="theme" className="change-theme-btn"></input>
            </label> */}

            <label className='label-btn-dropdown' htmlFor="btn-dropdown">
           
                <button id='btn-dropdown' className="nav-btn dropdown-nav-btn">
                    <span>Mi Reserva</span> 
                    <span className="dropdown-arrow">▼</span>
                    
                    <div className="dropdown-nav">
                        <BtnNav href='' text='Cambio de asiento'/>
                        <BtnNav href='' text='Estado de mi reserva'/>
                        <BtnNav href='' text='Cambio de asiento'/>
                        <BtnNav href='' text='Estado de vuelo'/>
                        <BtnNav href='' text='Check in'/>
                    </div>
                </button>
                </label>


            <BtnNav href='' text='Club'/>
            <BtnNav href='' text='Cargas'/>
            <BtnNav href='' text='Blog'/>
            <BtnNav href='' text='¿Preguntas?'/>


        

             <BotonDropdown/>
        </nav>
      <DropdownMobile />
    </header>
   </>
  )
}

function BtnNav(props){
    return(<>
    <a href={props.href} className='nav-btn'>  {props.text}</a>  
    </>)
}

function BotonDropdown(){
    return(<>
    
    <label className='label-btn-dropdown' htmlFor="country-dropdown-nav-btn">
        <span className='country-dropdown-wrapper'>
    
    <button className="nav-btn dropdown-nav-btn" id="country-dropdown-nav-btn">
    <img className="country-logo" src={imgArg} alt="logo argentina"/> 
    <span> Arg/$</span>
    <span className="dropdown-arrow">▼</span>
                    
                <div className="dropdown-nav">
             <BtnNav href='' img=''
              text= {[<span className='country-dropdown-wrapper'>
              <img className="country-logo" src={imgBr} alt="logo argentina"/> 
              <p>Br/$R</p>
              </span>]}/>

             <BtnNav href='' img='' text= {[ 
             <span className='country-dropdown-wrapper'>
             <img className="country-logo" src={imgPar} alt="logo argentina"/>
             <p>Par/U$D</p>
             </span>]}/>
                    
                </div>
            </button>
            </span>
            </label>
    </>)
}

function BurgerIcon(){
    return(<>
    
    <input type="checkbox" id="dropdown-mobile" aria-label="boton hamburguesa mobile"/>
    <label htmlFor="dropdown-mobile" className="dropdown-closeBtn-backG"></label>
    <label htmlFor="dropdown-mobile" className="dropdown-closeBtn"></label>
    <button className="burgerIcon" aria-label="abrir barra de navegacion">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </button>

    
    </>)
}

function DropdownMobile(){
   return(<>
   
   <div className="dropdown">
    <BurgerIcon/>

    <div className="dropdown-menu">
            <BtnNav href='' text='Mi reserva '/>
            <BtnNav href='' text='Estado de vuelo'/>
            <BtnNav href='' text='Grupos'/>
            <BtnNav href='' text='Ultra Pases'/>
            <BtnNav href='' text='Club'/>
            <BtnNav href='' text='Cargas'/>
            <BtnNav href='' text='Blog'/>
            <BtnNav href='' text='¿Preguntas?'/> 
            <BotonDropdown/>

    </div>
</div>
   
   </>
   )
}