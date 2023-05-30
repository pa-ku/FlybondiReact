import React from 'react'
import svgLogo from '../assets/icons/fly-logo.svg'
import imgArg from '../assets/country/arg.png'
import imgBr from '../assets/country/br.png'
import imgPar from '../assets/country/par.png'
import svgArrow from '../assets/icons/dropdown-arrow.svg'
import styled from "styled-components";

const DropdownArrow = styled.img`

width: 20px;
transition: .4s;

&:hover{
    rotate:180deg;
}
`

const Head = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  box-shadow: 2px 2px 10px 1px #3333333b;
  z-index: 999;
  width: 100%;
  height: 3.5em;
  top: 0px;
  left: 0px;
  padding-inline: 2em;
`

const LogoFlybondi = styled.img`
  width: 150px;
`

const LabelDropdown = styled.label`
    width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  `


export default function Header() {
  return (
   <>
   
   <Head>
        <LogoFlybondi src={svgLogo} id="logoFlybondi" alt="logo flybondi, boton inicio"/>
       
        <nav id="nav-ctn">

            {/* <label className="label-theme-btn" htmlFor="theme">
                <input type="checkbox" id="theme" className="change-theme-btn"></input>
            </label> */}

            <LabelDropdown className='label-btn-dropdown' htmlFor="btn-dropdown">
                <button id='btn-dropdown' className="nav-btn dropdown-nav-btn">
                    <span>Mi Reserva</span> 
                    <DropdownArrow src={svgArrow}></DropdownArrow>
                    <div className="dropdown-nav">
                        <BtnNav href='' text='Cambio de asiento'/>
                        <BtnNav href='' text='Estado de mi reserva'/>
                        <BtnNav href='' text='Cambio de asiento'/>
                        <BtnNav href='' text='Estado de vuelo'/>
                        <BtnNav href='' text='Check in'/>
                    </div>
                </button>
                </LabelDropdown>


            <BtnNav href='' text='Club'/>
            <BtnNav href='' text='Cargas'/>
            <BtnNav href='' text='Blog'/>
            <BtnNav href='' text='¿Preguntas?'/>

             <BotonDropdown/>
        </nav>
      <DropdownMobile />
    </Head>
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
    <DropdownArrow src={svgArrow}></DropdownArrow>
                    
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