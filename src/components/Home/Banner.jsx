import React from 'react'
import imgBanner1 from '../../assets/banner/banner1.webp'
import imgBanner2 from '../../assets/banner/banner2.webp'
import imgBanner3 from '../../assets/banner/banner3.webp'
import imgBanner4 from '../../assets/banner/banner4.webp'

export default function Banner() {
  return (
<>


{/* <!-- banner --> */}
    <div className="banner-ctn">
        <section className="section-carousel">
            <div className="carousel" data-carousel>
                <button className=" carousel-button next" data-carousel-button="next">&#10095;</button>
                <button className=" carousel-button prev" data-carousel-button="prev">&#10094;</button>
                <ul data-slides>

                    <li className="slide" data-active>
                        <a href="#" className="slide-anchor" target="_blank" aria-label="bigbox y flybondi"></a>
                        <img width=" 200px" height="200px" src={imgBanner1} alt="bigbox y flybondi"/>
                    </li>

                    <li className="slide">
                        <a href="#" className="slide-anchor" target="_blank" aria-label="precios rebobinados! ofertas en vuelos"></a>
                        <img loading="lazy" width=" 200px" height="200px" src={imgBanner2} alt="precios rebobinados! ofertas en vuelos"/>
                    </li>


                    <li className="slide">
                        <a href="#" className="slide-anchor" target="_blank" aria-label="Vola a salta 5199"></a>
                        <img loading="lazy" width=" 200px" height="200px" src={imgBanner3} alt="Vola a salta 5199"/>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</>
  )
}
