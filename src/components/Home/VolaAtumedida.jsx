import React from 'react'
import imgUltrapase from '../../assets/volaATuMedida/ultrapases.webp'
import imgRevistasomos from '../../assets/volaATuMedida/revistasomos.webp'
import imgClubflybondi from '../../assets/volaATuMedida/clubflybondi.webp'
import imgBlog from '../../assets/volaATuMedida/blog.webp'
import SectionTitle from './SectionTitle'


function FlyCard(props) {
  return (
    <>
      <div className="fourCards">
        <a href=""><img loading="lazy" src={props.img} alt="" /></a>
      </div>
    </>
  )
}


export default function VolaAtumedida() {
  return (
    <>
      <section>
        <SectionTitle title='Volá a tu medida'
          text='¡Elegí la opción que más te guste y preparate para despegar!' />

        <div className="Component-FourCards">

          <FlyCard img={imgUltrapase} />
          <FlyCard img={imgClubflybondi} />
          <FlyCard img={imgRevistasomos} />
          <FlyCard img={imgBlog} />

        </div>
      </section>

    </>
  )
}
