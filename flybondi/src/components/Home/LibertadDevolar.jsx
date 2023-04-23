import React from 'react'
import imgCalendar from '../../assets/libertadvolar/calendar.svg'
import imgPassport from '../../assets/libertadvolar/passport.svg'
import imgPayments from '../../assets/libertadvolar/payments.svg'
import imgTicket from '../../assets/libertadvolar/ticket.svg'
import imgValija from '../../assets/libertadvolar/valija.svg'
import SectionTitle from './SectionTitle'





export default function LibertadDevolar() {
  return (
  <>
  
<section>
<SectionTitle title='La libertad de volar, paso a paso'
text='Te contamos todo lo que tenés que saber para volar en Flybondi al precio
más bajo'/>

    <div className="libertad-wrapper">
        <div className="libertadVolar-card">
            <h2>SELECCIONÁ TU VUELO</h2>
            <div>
                <img loading="lazy" src={imgCalendar} alt="" className="libertadVolar-img"/>
                <p>
                    Elegí a dónde querés ir y cuándo. Acordate que cuanto antes compres, más barato vas a volar.</p>
            </div>
            <a href="https://flybondi.com/ar/destinos/?" className="threeCards-anchor">Conocé nuestros destinos</a>
        </div>


        <div className="libertadVolar-card">
            <h2>¿QUÉ INCLUYE MI PASAJE?</h2>

            <div>
                <img loading="lazy" src={imgValija} alt=""/>
                <p>
                    Elegí a dónde querés ir y cuándo. Acordate que cuanto antes compres, más barato vas a volar.</p>
            </div>
            <a href="https://ayuda.flybondi.com/es-419/section/40-equipaje?_gl=1*1qxrvv1*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjY3NDkuNjAuMC4w" className="threeCards-anchor">Conocé nuestros destinos</a>
        </div>

        <div className="libertadVolar-card">
            <h2>PAGÁ</h2>
            <div>
                <img loading="lazy" src={imgPayments} alt=""/>
                <p>Usá tu tarjeta de débito o crédito y recibí nuestra confirmación de compra inmediatamente en tu mail.
                    También podés pagar en efectivo a través de Rapipago o Pago Fácil.</p>
            </div>
            <a href="https://ayuda.flybondi.com/es-419/section/8-metodos-de-pago?_gl=1*1qxrvv1*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjY3NDkuNjAuMC4w" className="threeCards-anchor">Conocé nuestros destinos</a>
        </div>

    

 <div className=" libertadVolar-card">
            <h2>HACÉ TU CHECK-IN</h2>
            <div>
                <img loading="lazy" src={imgTicket} alt=""/>
                <p>
                    A partir de las 48 hs. antes de tu vuelo, entrá a nuestra web y confirmá tu viaje. Ahórrate el costo
                    adicional de realizarlo en el aeropuerto.</p>
            </div>
            <a href="https://flybondi.kayako.com/es-419/section/6-check-in" className="threeCards-anchor">
                ¿Qué es el Check-In?</a>
        </div>

        <div className="libertadVolar-card">
            <h2>RECIBÍ TU TARJETA DE EMBARQUE</h2>
            <div>
                <img loading="lazy" src={imgPassport} alt=""/>
                <p>Te vamos a enviar por email la tarjeta de embarque para que presentes con tu teléfono o imprimas en
                    tu casa. Ahorrate el costo adicional de realizarlo en el aeropuerto.</p>
            </div>
            <a href="https://flybondi.kayako.com/es-419/article/37-como-puedo-obtener-mi-tarjeta-de-embarque" className="threeCards-anchor">¿Qué es la tarjeta de embarque?</a>
        </div>

        <div className="libertadVolar-card">
            <h2>¡NOS VEMOS EN EL AEROPUERTO!</h2>
            <div>
                <img loading="lazy" src={imgCalendar} alt=""/>
                <p>
                    No olvides llevar la documentación necesaria para volar.</p>
            </div>
            <a href="https://ayuda.flybondi.com/es-419/article/22-que-documentacion-necesito-para-viajar?_gl=1*yj397m*_ga*MTgwNzY2OTMwMC4xNjYzMzc5Mjk1*_ga_1HGSJR4WPQ*MTY2NzU2NTI5OS41Mi4xLjE2Njc1NjY3NDkuNjAuMC4w" className="threeCards-anchor">¿Qué documentación necesito para volar?</a>
        </div>
    </div>
    </section>
  </>
  )
}
